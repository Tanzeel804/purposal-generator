// ===== DOM ELEMENTS =====
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = themeToggleBtn.querySelector("i");
const body = document.body;
const contextButtons = document.querySelectorAll(".context-btn");
const currentContextDisplay = document.getElementById("currentContextDisplay");
const styleSelect = document.getElementById("styleSelect");
const crushNameInput = document.getElementById("crushName");
const yourNameInput = document.getElementById("yourName");
const customMessageInput = document.getElementById("customMessage");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const proposalOutput = document.getElementById("proposalOutput");
const exportControls = document.getElementById("exportControls");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const removeImageBtn = document.getElementById("removeBtn");
const filterButtons = document.querySelectorAll(".filter-options button");
const backToTopBtn = document.getElementById("backToTop");

// ===== APPLICATION STATE =====
let appState = {
  theme: "light-mode",
  context: "romantic",
  uploadedImage: null,
  imageFilter: "none",
  styleOptions: {
    romantic: [
      { value: "sweet", text: "Sweet & Romantic" },
      { value: "passionate", text: "Passionate & Bold" },
      { value: "poetic", text: "Poetic & Artistic" },
      { value: "movie", text: "Movie-Inspired" },
      { value: "adventure", text: "Adventure-Themed" },
    ],
    friendship: [
      { value: "friendship", text: "Friendship First" },
      { value: "funny", text: "Funny & Playful" },
      { value: "honest", text: "Honest & Sincere" },
      { value: "nostalgic", text: "Nostalgic" },
      { value: "supportive", text: "Supportive" },
    ],
  },
  proposalTemplates: {
    // Romantic Templates
    sweet:
      "From the moment I met you, I knew my search was over. Every laugh, every conversation, every moment with you feels right. Will you make me the happiest person and be my partner?",
    passionate:
      "I don't want to just be in your life, I want to be your life. Let's build a future together. Will you be mine?",
    // Friendship Templates
    friendship:
      "You are my favorite person to talk to, my greatest support, and my truest friend. I can't imagine my future without you in it. Would you take our friendship to the next level?",
    funny:
      "We're already an amazing team. I figure we should make it official before someone else snaps you up! What do you say?",
  },
};

// ===== INITIALIZATION =====
function init() {
  loadSavedPreferences();
  setupEventListeners();
  updateContextDisplay();
  populateStyleSelect();
  setCurrentYear();
}
document.addEventListener("DOMContentLoaded", init);

// ===== THEME MANAGEMENT =====
function loadSavedPreferences() {
  const savedTheme = localStorage.getItem("proposalTheme");
  const savedContext = localStorage.getItem("proposalContext");
  if (savedTheme) {
    appState.theme = savedTheme;
    body.className = `${savedTheme} ${savedContext || "romantic"}`;
    updateThemeIcon();
  }
  if (savedContext) {
    appState.context = savedContext;
    const activeBtn = document.querySelector(
      `.context-btn[data-context="${savedContext}"]`
    );
    if (activeBtn) setActiveContextButton(activeBtn);
  }
}

function toggleTheme() {
  appState.theme = appState.theme === "light-mode" ? "dark-mode" : "light-mode";
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(appState.theme);
  localStorage.setItem("proposalTheme", appState.theme);
  updateThemeIcon();
}
function updateThemeIcon() {
  themeIcon.className =
    appState.theme === "light-mode" ? "fas fa-moon" : "fas fa-sun";
}

// ===== RELATIONSHIP CONTEXT MANAGEMENT =====
function setupContextSwitching() {
  contextButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedContext = this.dataset.context;
      if (selectedContext === appState.context) return;
      appState.context = selectedContext;
      body.setAttribute("data-context", selectedContext);
      localStorage.setItem("proposalContext", selectedContext);
      setActiveContextButton(this);
      updateContextDisplay();
      populateStyleSelect();
      // Optional: Trigger a visual transition effect
      proposalOutput.innerHTML =
        '<p class="preview-placeholder">Context updated! Regenerate your proposal.</p>';
      exportControls.style.display = "none";
    });
  });
}
function setActiveContextButton(activeButton) {
  contextButtons.forEach((btn) => btn.classList.remove("active"));
  activeButton.classList.add("active");
}
function updateContextDisplay() {
  const displayText =
    appState.context === "romantic" ? "Romantic Love" : "Friendship to More";
  currentContextDisplay.textContent = displayText;
}
function populateStyleSelect() {
  styleSelect.innerHTML = "";
  const styles = appState.styleOptions[appState.context];
  styles.forEach((style) => {
    const option = document.createElement("option");
    option.value = style.value;
    option.textContent = style.text;
    styleSelect.appendChild(option);
  });
}

// ===== PHOTO UPLOAD & HANDLING (CRITICAL FEATURE) =====
function setupPhotoUpload() {
  // Click to browse
  dropZone.addEventListener("click", () => fileInput.click());
  // Drag and drop
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => dropZone.classList.add("dragover"),
      false
    );
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => dropZone.classList.remove("dragover"),
      false
    );
  });
  dropZone.addEventListener("drop", handleDrop, false);
  fileInput.addEventListener("change", handleFileSelect, false);
  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.dataset.filter;
      appState.imageFilter = filter;
      applyImageFilter(filter);
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
  // Remove image
  removeImageBtn.addEventListener("click", removeUploadedImage);
}
function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}
function handleFileSelect(e) {
  const files = e.target.files;
  handleFiles(files);
}
function handleFiles(files) {
  if (files.length === 0) return;
  const file = files[0];
  // Basic validation
  if (!file.type.match("image.*")) {
    alert("Please select an image file (JPG, PNG, WEBP).");
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    if (!confirm("Image is larger than 5MB. It may load slowly. Continue?"))
      return;
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    appState.uploadedImage = e.target.result;
    imagePreview.src = appState.uploadedImage;
    imagePreviewContainer.style.display = "block";
    applyImageFilter(appState.imageFilter);
  };
  reader.readAsDataURL(file);
}
function applyImageFilter(filter) {
  if (!appState.uploadedImage) return;
  let filterStyle = "";
  switch (filter) {
    case "sepia":
      filterStyle = "sepia(0.6)";
      break;
    case "vintage":
      filterStyle = "sepia(0.4) contrast(1.2) brightness(0.9)";
      break;
    case "soft":
      filterStyle = "contrast(1.1) brightness(1.1) blur(0.5px)";
      break;
    default:
      filterStyle = "none";
  }
  imagePreview.style.filter = filterStyle;
}
function removeUploadedImage() {
  appState.uploadedImage = null;
  imagePreview.src = "";
  imagePreviewContainer.style.display = "none";
  fileInput.value = "";
}

// ===== PROPOSAL GENERATION =====
function generateProposal() {
  const crushName = crushNameInput.value.trim() || "My Love";
  const yourName = yourNameInput.value.trim() || "Your Admirer";
  const selectedStyle = styleSelect.value;
  const customMessage = customMessageInput.value.trim();
  const context = appState.context;

  // Get base template
  let proposalText =
    appState.proposalTemplates[selectedStyle] ||
    appState.proposalTemplates[context === "romantic" ? "sweet" : "friendship"];

  // Personalize
  proposalText = proposalText.replace(/\[name\]/gi, crushName);

  // Build the proposal card HTML
  let photoHTML = "";
  if (appState.uploadedImage) {
    photoHTML = `
            <div class="photo-frame">
                <img src="${appState.uploadedImage}" alt="Special memory with ${crushName}" style="filter: ${appState.imageFilter};">
            </div>
        `;
  }

  const proposalHTML = `
        <div class="proposal-card ${context}">
            ${photoHTML}
            <h3>For ${crushName}</h3>
            <div class="message">
                <p>${proposalText}</p>
                ${customMessage ? `<p><em>"${customMessage}"</em></p>` : ""}
            </div>
            <div class="signature">
                <p>With all my heart,</p>
                <p><strong>${yourName}</strong></p>
            </div>
        </div>
    `;

  proposalOutput.innerHTML = proposalHTML;
  proposalOutput.classList.add("has-content");
  exportControls.style.display = "block";
}

// ===== EXPORT & SHARE =====
function setupExportControls() {
  document.querySelectorAll(".export-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action;
      switch (action) {
        case "download-image":
          alert(
            "Advanced: Would use html2canvas library to convert the card to an image."
          );
          break;
        case "copy-text":
          const textToCopy = `Proposal for ${crushNameInput.value}: ${
            document.querySelector(".proposal-card .message")?.innerText || ""
          }`;
          navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Proposal text copied to clipboard!");
          });
          break;
        case "share-whatsapp":
          const shareText = `Check out the proposal I made for you! 💖`;
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            shareText
          )}`;
          window.open(whatsappUrl, "_blank");
          break;
      }
    });
  });
}

// ===== UTILITY & EVENT LISTENERS =====
function setCurrentYear() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}
function setupEventListeners() {
  themeToggleBtn.addEventListener("click", toggleTheme);
  setupContextSwitching();
  setupPhotoUpload();
  generateBtn.addEventListener("click", generateProposal);
  resetBtn.addEventListener("click", function () {
    if (confirm("Reset all inputs and image?")) {
      crushNameInput.value = "";
      yourNameInput.value = "";
      customMessageInput.value = "";
      removeUploadedImage();
      proposalOutput.innerHTML =
        '<p class="preview-placeholder">Your personalized proposal card will appear here after generation.</p>';
      proposalOutput.classList.remove("has-content");
      exportControls.style.display = "none";
    }
  });
  setupExportControls();
  // Back to top
  backToTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  window.addEventListener("scroll", () => {
    backToTopBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
  });
}
