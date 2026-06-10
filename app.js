const DEFAULT_MEMBERS = [];

const PRESETS = {
  preconstruction: {
    type: 'preconstruction',
    title: '',
    bgColor: '#ffffff',
    accentColor: '#ed2227',
    headingColor: '#0f131a',
    headingSize: 58,
    headingFont: 'Arial',
    headingBold: false,
    headingLineHeight: 1.02,
    headingTracking: -0.02,
    cardBg: '#ffffff',
    cardTextColor: '#101820',
    cardSubColor: '#263342',
    outlineColor: '#d8dde3',
    outlineWidth: 1,
    cardRadius: 10,
    showOutline: true,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: false,
    nameLineHeight: 1.12,
    roleLineHeight: 1.15,
    nameTracking: 0,
    roleTracking: 0,
    roleWeight: 400,
    cardStyle: 'classic',
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    canvasRowCount: 'auto',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 4,
    connectorColor: '#8d949f',
    connectorStartColor: '#8d949f',
    connectorEndColor: '#8d949f',
    connectorStartMarkerScale: 1,
    connectorMarkerScale: 1,
    cardShape: 'rectangle',
    cardLayout: 'avatar-left',
    avatarStyle: 'rounded',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    cardWidthScale: 100,
    cardHeightScale: 100,
    bgGradientEnabled: false,
    bgGradientColor2: '#dfe8f3',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'strict',
    formalOrganic: 20,
    symmetryDynamic: 18,
    structureFreeform: 14,
    shadowIntensity: 100,
    blurStrength: 10,
    backgroundDepth: 0,
    ambientGlow: false,
    connectorStartPoint: 'none',
    connectorEndPoint: 'arrow',
    connectorMarkers: 'arrow-end',
    cardVisualType: 'standard',
    nodeStylePreset: 'visio-basic',
    employeeFields: {
      name: true,
      title: true,
      department: false,
      telephone: false,
      email: false,
      address: false,
      location: false
    }
  },
  construction: {
    type: 'construction',
    title: 'CONSTRUCTION PROJECT TEAM',
    bgColor: '#ffffff',
    accentColor: '#ed2227',
    headingColor: '#10131a',
    headingSize: 58,
    headingFont: 'Arial',
    headingBold: false,
    headingLineHeight: 1.02,
    headingTracking: -0.02,
    cardBg: '#ffffff',
    cardTextColor: '#11181f',
    cardSubColor: '#2e3947',
    outlineColor: '#dfd4d7',
    outlineWidth: 1,
    cardRadius: 10,
    showOutline: true,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: false,
    nameLineHeight: 1.12,
    roleLineHeight: 1.15,
    nameTracking: 0,
    roleTracking: 0,
    roleWeight: 400,
    cardStyle: 'classic',
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    canvasRowCount: 'auto',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 4,
    connectorColor: '#8d949f',
    connectorStartColor: '#8d949f',
    connectorEndColor: '#8d949f',
    connectorStartMarkerScale: 1,
    connectorMarkerScale: 1,
    cardShape: 'rectangle',
    cardLayout: 'avatar-left',
    avatarStyle: 'rounded',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    cardWidthScale: 100,
    cardHeightScale: 100,
    bgGradientEnabled: false,
    bgGradientColor2: '#dfe8f3',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'strict',
    formalOrganic: 20,
    symmetryDynamic: 18,
    structureFreeform: 14,
    shadowIntensity: 100,
    blurStrength: 10,
    backgroundDepth: 0,
    ambientGlow: false,
    connectorStartPoint: 'none',
    connectorEndPoint: 'arrow',
    connectorMarkers: 'arrow-end',
    cardVisualType: 'standard'
  },
  corporate: {
    type: 'corporate',
    title: 'JRM CORPORATE SERVICES',
    bgColor: '#ffffff',
    accentColor: '#ed2227',
    headingColor: '#111822',
    headingSize: 54,
    headingFont: 'Arial',
    headingBold: false,
    headingLineHeight: 1.02,
    headingTracking: -0.02,
    cardBg: '#ffffff',
    cardTextColor: '#121b25',
    cardSubColor: '#2b3a4a',
    outlineColor: '#f0f0f0',
    outlineWidth: 1,
    cardRadius: 48,
    showOutline: false,
    showShadow: true,
    nameSize: 16,
    roleSize: 11,
    nameBold: false,
    nameLineHeight: 1.12,
    roleLineHeight: 1.15,
    nameTracking: 0,
    roleTracking: 0,
    roleWeight: 400,
    cardStyle: 'pill',
    bgImage: '',
    themePreset: 'corporate',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    canvasRowCount: 'auto',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 4,
    connectorColor: '#8d949f',
    connectorStartColor: '#8d949f',
    connectorEndColor: '#8d949f',
    connectorStartMarkerScale: 1,
    connectorMarkerScale: 1,
    cardShape: 'circle',
    cardLayout: 'avatar-left',
    avatarStyle: 'circle',
    cardElevation: 'soft',
    infoVisibility: 'name-role',
    cardWidthScale: 100,
    cardHeightScale: 100,
    bgGradientEnabled: false,
    bgGradientColor2: '#dfe8f3',
    cardEntranceAnimation: 'cascade',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'symmetrical',
    formalOrganic: 24,
    symmetryDynamic: 22,
    structureFreeform: 18,
    shadowIntensity: 112,
    blurStrength: 10,
    backgroundDepth: 0,
    ambientGlow: false,
    connectorStartPoint: 'none',
    connectorEndPoint: 'arrow',
    connectorMarkers: 'arrow-end',
    cardVisualType: 'standard'
  },
  introduction: {
    type: 'introduction',
    title: 'JRM INTRODUCTIONS',
    bgColor: '#ffffff',
    accentColor: '#ed2227',
    headingColor: '#141b23',
    headingSize: 52,
    headingFont: 'Arial',
    headingBold: false,
    headingLineHeight: 1.04,
    headingTracking: -0.01,
    cardBg: '#ffffff',
    cardTextColor: '#11171f',
    cardSubColor: '#2f3b48',
    outlineColor: '#121b25',
    outlineWidth: 2,
    cardRadius: 12,
    showOutline: true,
    showShadow: false,
    nameSize: 15,
    roleSize: 11,
    nameBold: false,
    nameLineHeight: 1.1,
    roleLineHeight: 1.15,
    nameTracking: 0,
    roleTracking: 0,
    roleWeight: 400,
    cardStyle: 'intro',
    bgImage: '',
    themePreset: 'minimal',
    hierarchyDirection: 'top-down',
    nodeSpacing: 'balanced',
    canvasRowCount: 'auto',
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 4,
    connectorColor: '#8d949f',
    connectorStartColor: '#8d949f',
    connectorEndColor: '#8d949f',
    connectorStartMarkerScale: 1,
    connectorMarkerScale: 1,
    cardShape: 'tall-badge',
    cardLayout: 'avatar-top',
    avatarStyle: 'rounded',
    cardElevation: 'flat',
    infoVisibility: 'name-role',
    cardWidthScale: 100,
    cardHeightScale: 100,
    bgGradientEnabled: false,
    bgGradientColor2: '#dfe8f3',
    cardEntranceAnimation: 'tree-grow',
    connectorAnimation: 'draw',
    animationSpeed: 'normal',
    layoutMode: 'editorial',
    formalOrganic: 28,
    symmetryDynamic: 32,
    structureFreeform: 30,
    shadowIntensity: 78,
    blurStrength: 6,
    backgroundDepth: 0,
    ambientGlow: false,
    connectorStartPoint: 'none',
    connectorEndPoint: 'arrow',
    connectorMarkers: 'arrow-end',
    cardVisualType: 'editorial',
    avatarStyle: 'default'
  }
};

const STORAGE_KEY = 'teamgen-state-v2';
const DRAFT_STORAGE_KEY = 'teamgen-state-draft-v1';
const CHART_ARCHIVE_KEY = 'teamgen-chart-archive-v1';
const WINDOW_STATE_KEY = 'teamgen-window-state-v1';
const SERVER_STATE_ENDPOINT = '/__easyorg_state';
const HASH_STATE_PREFIX = '#easyorg-state=';
const STATE_DB_NAME = 'teamgen-state-db';
const STATE_DB_STORE = 'state';
const STATE_DB_KEY = 'current';
const MAX_SYNC_STATE_CHARS = 3_500_000;
const MAX_WINDOW_STATE_CHARS = 750_000;
const MAX_LIBRARY_ZIP_BYTES = 250 * 1024 * 1024;
const CANVAS_ZOOM_MIN = 0.3;
const CANVAS_ZOOM_MAX = 2.5;
const CANVAS_ZOOM_STEP = 0.1;
const LEGACY_CANVAS_TITLES = new Set(['PRE-CONSTRUCTION PROJECT TEAM']);
const activeZipPhotoUrls = new Set();
let hasRenderedCanvasOnce = false;
const FONT_CANDIDATES = [
  'Sora',
  'Manrope',
  'Inter',
  'Aptos',
  'Segoe UI',
  'Arial',
  'Arial Black',
  'Calibri',
  'Cambria',
  'Candara',
  'Comic Sans MS',
  'Consolas',
  'Courier New',
  'Georgia',
  'Garamond',
  'Helvetica',
  'Impact',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana'
];

const TYPOGRAPHY_DEFAULTS = structuredClone(PRESETS.preconstruction);

function normalizeSettings(settings) {
  const presetKey = settings?.type && PRESETS[settings.type] ? settings.type : 'preconstruction';
  const legacyGradientEnabled = settings?.backgroundStyle === 'gradient';
  const normalized = {
    ...PRESETS[presetKey],
    ...(settings || {})
  };
  if (!Number.isFinite(Number(normalized.cardWidthScale)) && Number.isFinite(Number(normalized.cardScale))) {
    normalized.cardWidthScale = Number(normalized.cardScale);
  }
  if (!Number.isFinite(Number(normalized.cardHeightScale)) && Number.isFinite(Number(normalized.cardScale))) {
    normalized.cardHeightScale = Number(normalized.cardScale);
  }
  normalized.cardWidthScale = Number.isFinite(Number(normalized.cardWidthScale)) ? Number(normalized.cardWidthScale) : 100;
  normalized.cardHeightScale = Number.isFinite(Number(normalized.cardHeightScale)) ? Number(normalized.cardHeightScale) : 100;
  normalized.bgGradientEnabled = typeof normalized.bgGradientEnabled === 'boolean' ? normalized.bgGradientEnabled : legacyGradientEnabled;
  normalized.bgGradientColor2 = normalized.bgGradientColor2 || '#dfe8f3';
  normalized.nodeStylePreset = normalized.nodeStylePreset || 'visio-basic';
  normalized.orgChartView = normalized.orgChartView || 'standard';
  normalized.orgChartColorBy = normalized.orgChartColorBy || 'none';
  normalized.showOrgChartBadges = normalized.showOrgChartBadges !== false;
  normalized.showChartLegend = normalized.showChartLegend !== false;
  normalized.legendPosition = normalized.legendPosition || 'top-right';
  normalized.showReportCountBadge = normalized.showReportCountBadge === true;
  normalized.showChartLogo = normalized.showChartLogo !== false;
  normalized.chartLogo = normalized.chartLogo || '';
  if (LEGACY_CANVAS_TITLES.has(String(normalized.title || '').trim().toUpperCase())) {
    normalized.title = '';
  }
  normalized.employeePhotos = normalized.employeePhotos !== false;
  normalized.cardFont = normalized.cardFont || normalized.headingFont || 'Arial';
  normalized.headingWeight = Number.isFinite(Number(normalized.headingWeight)) ? Number(normalized.headingWeight) : 400;
  normalized.headingLineHeight = Number.isFinite(Number(normalized.headingLineHeight)) ? Number(normalized.headingLineHeight) : 1.02;
  normalized.headingTracking = Number.isFinite(Number(normalized.headingTracking)) ? Number(normalized.headingTracking) : -0.02;
  normalized.nameWeight = Number.isFinite(Number(normalized.nameWeight)) ? Number(normalized.nameWeight) : 400;
  normalized.nameLineHeight = Number.isFinite(Number(normalized.nameLineHeight)) ? Number(normalized.nameLineHeight) : 1.12;
  normalized.roleLineHeight = Number.isFinite(Number(normalized.roleLineHeight)) ? Number(normalized.roleLineHeight) : 1.15;
  normalized.nameTracking = Number.isFinite(Number(normalized.nameTracking)) ? Number(normalized.nameTracking) : 0;
  normalized.roleTracking = Number.isFinite(Number(normalized.roleTracking)) ? Number(normalized.roleTracking) : 0;
  normalized.roleWeight = Number.isFinite(Number(normalized.roleWeight)) ? Number(normalized.roleWeight) : 400;
  normalized.departmentFont = normalized.departmentFont || normalized.cardFont || 'Arial';
  normalized.departmentWeight = Number.isFinite(Number(normalized.departmentWeight)) ? Number(normalized.departmentWeight) : 400;
  normalized.departmentColor = normalized.departmentColor || normalized.cardSubColor;
  normalized.departmentSize = Number.isFinite(Number(normalized.departmentSize)) ? Number(normalized.departmentSize) : 12;
  normalized.departmentLineHeight = Number.isFinite(Number(normalized.departmentLineHeight)) ? Number(normalized.departmentLineHeight) : 1.12;
  normalized.emailFont = normalized.emailFont || normalized.cardFont || 'Arial';
  normalized.emailWeight = Number.isFinite(Number(normalized.emailWeight)) ? Number(normalized.emailWeight) : 400;
  normalized.emailColor = normalized.emailColor || normalized.cardSubColor;
  normalized.emailSize = Number.isFinite(Number(normalized.emailSize)) ? Number(normalized.emailSize) : 12;
  normalized.emailLineHeight = Number.isFinite(Number(normalized.emailLineHeight)) ? Number(normalized.emailLineHeight) : 1.12;
  normalized.locationFont = normalized.locationFont || normalized.cardFont || 'Arial';
  normalized.locationWeight = Number.isFinite(Number(normalized.locationWeight)) ? Number(normalized.locationWeight) : 400;
  normalized.locationColor = normalized.locationColor || normalized.cardSubColor;
  normalized.locationSize = Number.isFinite(Number(normalized.locationSize)) ? Number(normalized.locationSize) : 12;
  normalized.locationLineHeight = Number.isFinite(Number(normalized.locationLineHeight)) ? Number(normalized.locationLineHeight) : 1.12;
  normalized.cardFillPattern = normalized.cardFillPattern || 'none';
  normalized.cardLineStyle = normalized.cardLineStyle || 'solid';
  normalized.connectorColor = normalized.connectorColor || normalized.accentColor || '#8d949f';
  normalized.connectorStartColor = normalized.connectorStartColor || normalized.connectorColor || normalized.accentColor || '#8d949f';
  normalized.connectorEndColor = normalized.connectorEndColor || normalized.connectorColor || normalized.accentColor || '#8d949f';
  normalized.connectorMarkerScale = Number.isFinite(Number(normalized.connectorMarkerScale)) ? Number(normalized.connectorMarkerScale) : 1;
  normalized.connectorStartMarkerScale = Number.isFinite(Number(normalized.connectorStartMarkerScale)) ? Number(normalized.connectorStartMarkerScale) : 1;
  const legacyStartPoint = normalizeConnectorMarker(normalized.connectorStartPoint || normalized.connectorDecoration);
  const legacyEndPoint = normalizeConnectorMarker(normalized.connectorEndPoint || normalized.connectorVisualStyle);
  normalized.connectorStartPoint = legacyStartPoint;
  normalized.connectorEndPoint = legacyEndPoint;
  normalized.connectorDecoration = legacyStartPoint;
  normalized.connectorVisualStyle = legacyEndPoint;
  if (!normalized.connectorMarkers) {
    normalized.connectorMarkers = 'none';
  }
  const employeeFields = normalized.employeeFields || {};
  normalized.employeeFields = {
    name: employeeFields.name !== false,
    title: employeeFields.title !== false,
    department: employeeFields.department === true,
    telephone: false,
    email: false,
    address: false,
    location: false
  };
  normalized.infoVisibility = normalized.employeeFields.department
    ? 'name-role-dept'
    : normalized.employeeFields.title
      ? 'name-role'
      : 'name-only';
  return normalized;
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function createDefaultChartDetails() {
  return {
    name: '',
    createdBy: '',
    createdDate: todayIsoDate(),
    permissions: []
  };
}

function normalizeChartDetails(details) {
  const fallback = createDefaultChartDetails();
  const source = details && typeof details === 'object' ? details : {};
  return {
    name: String(source.name || ''),
    createdBy: String(source.createdBy || ''),
    createdDate: String(source.createdDate || fallback.createdDate),
    permissions: Array.isArray(source.permissions)
      ? source.permissions.map((permission, index) => ({
          id: permission.id || `permission-${Date.now()}-${index}`,
          name: String(permission.name || ''),
          email: String(permission.email || ''),
          userType: String(permission.userType || 'Viewer'),
          inviteStatus: String(permission.inviteStatus || 'Pending'),
          scope: String(permission.scope || 'Can View')
        }))
      : []
  };
}

const state = {
  members: structuredClone(DEFAULT_MEMBERS),
  rows: [],
  nodes: {},
  manualLinks: [],
  selectedCardId: null,
  selectedMemberId: null,
  editingMemberId: null,
  nodeSequence: 1,
  settings: normalizeSettings(structuredClone(PRESETS.preconstruction)),
  autoConnect: true,
  draggingNodeId: null,
  canvasZoom: 1,
  canvasBoardWidth: null,
  canvasBoardHeight: null,
  showMinimap: true,
  savedCharts: [],
  chartDetails: createDefaultChartDetails(),
  chartSettingsMode: 'new'
};

const dom = {
  appShell: document.querySelector('.app-shell'),
  panelLeft: document.querySelector('.panel-left'),
  libraryList: document.getElementById('libraryList'),
  memberSearch: document.getElementById('memberSearch'),
  memberDepartmentFilter: document.getElementById('memberDepartmentFilter'),
  memberPositionFilter: document.getElementById('memberPositionFilter'),
  libraryZipInput: document.getElementById('libraryZipInput'),
  loadLibraryZipBtn: document.getElementById('loadLibraryZipBtn'),
  removeLibraryZipBtn: document.getElementById('removeLibraryZipBtn'),
  libraryUploadStatus: document.getElementById('libraryUploadStatus'),
  chartArchiveList: document.getElementById('chartArchiveList'),
  chartTitleInput: document.getElementById('chartTitleInput'),
  formatDirectionInput: document.getElementById('formatDirectionInput'),
  formatAdvancedLayoutInput: document.getElementById('formatAdvancedLayoutInput'),
  formatNodeStyleInput: document.getElementById('formatNodeStyleInput'),
  formatPictureUploadInput: document.getElementById('formatPictureUploadInput'),
  chartLogoInput: document.getElementById('chartLogoInput'),
  orgChartViewInput: document.getElementById('orgChartViewInput'),
  orgChartColorByInput: document.getElementById('orgChartColorByInput'),
  orgChartLegendInput: document.getElementById('orgChartLegendInput'),
  employeePhotosInput: document.getElementById('employeePhotosInput'),
  legendPositionInput: document.getElementById('legendPositionInput'),
  shapeFillColorInput: document.getElementById('shapeFillColorInput'),
  shapeFillPatternInput: document.getElementById('shapeFillPatternInput'),
  shapeTextColorInput: document.getElementById('shapeTextColorInput'),
  shapeSubTextColorInput: document.getElementById('shapeSubTextColorInput'),
  shapeFontInput: document.getElementById('shapeFontInput'),
  shapeLineColorInput: document.getElementById('shapeLineColorInput'),
  shapeLineStyleInput: document.getElementById('shapeLineStyleInput'),
  shapeLineWeightInput: document.getElementById('shapeLineWeightInput'),
  shapeShadowInput: document.getElementById('shapeShadowInput'),
  shapeShadowIntensityInput: document.getElementById('shapeShadowIntensityInput'),
  fieldNameInput: document.getElementById('fieldNameInput'),
  fieldTitleInput: document.getElementById('fieldTitleInput'),
  fieldDepartmentInput: document.getElementById('fieldDepartmentInput'),
  fieldTelephoneInput: document.getElementById('fieldTelephoneInput'),
  fieldEmailInput: document.getElementById('fieldEmailInput'),
  fieldAddressInput: document.getElementById('fieldAddressInput'),
  removeDepartmentInput: document.getElementById('removeDepartmentInput'),
  removeDepartmentBtn: document.getElementById('removeDepartmentBtn'),
  clearLibraryBtn: document.getElementById('clearLibraryBtn'),
  memberFormBox: document.getElementById('memberFormBox'),
  memberFormSummary: document.getElementById('memberFormSummary'),
  memberEditModal: document.getElementById('memberEditModal'),
  memberEditCloseBtn: document.getElementById('memberEditCloseBtn'),
  newMemberName: document.getElementById('newMemberName'),
  newMemberTitle: document.getElementById('newMemberTitle'),
  newMemberDepartment: document.getElementById('newMemberDepartment'),
  newMemberEmail: document.getElementById('newMemberEmail'),
  newMemberPhoto: document.getElementById('newMemberPhoto'),
  addMemberBtn: document.getElementById('addMemberBtn'),
  cancelEditMemberBtn: document.getElementById('cancelEditMemberBtn'),
  referenceChartInput: document.getElementById('referenceChartInput'),
  buildFromImageBtn: document.getElementById('buildFromImageBtn'),
  cardLayer: document.getElementById('cardLayer'),
  connectorLayer: document.getElementById('connectorLayer'),
  dragDropGuide: document.getElementById('dragDropGuide'),
  slide: document.getElementById('slidePreview'),
  slideHeader: document.getElementById('slideHeader'),
  slideTitle: document.getElementById('slideTitle'),
  hierarchyDirectionInput: document.getElementById('hierarchyDirectionInput'),
  nodeSpacingInput: document.getElementById('nodeSpacingInput'),
  rowCountInput: document.getElementById('rowCountInput'),
  connectorStyleInput: document.getElementById('connectorStyleInput'),
  connectorTypeInput: document.getElementById('connectorTypeInput'),
  connectorColorInput: document.getElementById('connectorColorInput'),
  connectorStartColorInput: document.getElementById('connectorStartColorInput'),
  connectorEndColorInput: document.getElementById('connectorEndColorInput'),
  connectorWeightInput: document.getElementById('connectorWeightInput'),
  connectorWeightValue: document.getElementById('connectorWeightValue'),
  connectorStartPointsInput: document.getElementById('connectorStartPointsInput'),
  connectorStartMarkerScaleInput: document.getElementById('connectorStartMarkerScaleInput'),
  connectorStartMarkerScaleValue: document.getElementById('connectorStartMarkerScaleValue'),
  connectorMarkerScaleInput: document.getElementById('connectorMarkerScaleInput'),
  connectorMarkerScaleValue: document.getElementById('connectorMarkerScaleValue'),
  cardEntranceAnimationInput: document.getElementById('cardEntranceAnimationInput'),
  connectorAnimationInput: document.getElementById('connectorAnimationInput'),
  animationSpeedInput: document.getElementById('animationSpeedInput'),
  layoutModeInput: document.getElementById('layoutModeInput'),
  formalOrganicInput: document.getElementById('formalOrganicInput'),
  symmetryDynamicInput: document.getElementById('symmetryDynamicInput'),
  structureFreeformInput: document.getElementById('structureFreeformInput'),
  shadowIntensityInput: document.getElementById('shadowIntensityInput'),
  blurStrengthInput: document.getElementById('blurStrengthInput'),
  backgroundDepthInput: document.getElementById('backgroundDepthInput'),
  connectorMarkersInput: document.getElementById('connectorMarkersInput'),
  cardVisualTypeInput: document.getElementById('cardVisualTypeInput'),
  bgColorInput: document.getElementById('bgColorInput'),
  bgGradientEnabledInput: document.getElementById('bgGradientEnabledInput'),
  bgGradientColor2Input: document.getElementById('bgGradientColor2Input'),
  headingSizeInput: document.getElementById('headingSizeInput'),
  headingColorInput: document.getElementById('headingColorInput'),
  headingFontInput: document.getElementById('headingFontInput'),
  headingLineHeightInput: document.getElementById('headingLineHeightInput'),
  headingTrackingInput: document.getElementById('headingTrackingInput'),
  headingWeightInput: document.getElementById('headingWeightInput'),
  titleTypography: document.querySelector('[data-typography-field="title"]'),
  nameTypography: document.querySelector('[data-typography-field="name"]'),
  headingSizeValue: document.getElementById('headingSizeValue'),
  headingLineHeightValue: document.getElementById('headingLineHeightValue'),
  headingTrackingValue: document.getElementById('headingTrackingValue'),
  cardFontInput: document.getElementById('cardFontInput'),
  cardTextColorInput: document.getElementById('cardTextColorInput'),
  departmentTypography: document.querySelector('[data-typography-field="department"]'),
  emailTypography: document.querySelector('[data-typography-field="email"]'),
  locationTypography: document.querySelector('[data-typography-field="location"]'),
  departmentColorInput: document.getElementById('departmentColorInput'),
  departmentFontInput: document.getElementById('departmentFontInput'),
  departmentWeightInput: document.getElementById('departmentWeightInput'),
  departmentSizeInput: document.getElementById('departmentSizeInput'),
  departmentSizeValue: document.getElementById('departmentSizeValue'),
  departmentLineHeightInput: document.getElementById('departmentLineHeightInput'),
  departmentLineHeightValue: document.getElementById('departmentLineHeightValue'),
  emailFontInput: document.getElementById('emailFontInput'),
  emailColorInput: document.getElementById('emailColorInput'),
  emailWeightInput: document.getElementById('emailWeightInput'),
  emailSizeInput: document.getElementById('emailSizeInput'),
  emailSizeValue: document.getElementById('emailSizeValue'),
  emailLineHeightInput: document.getElementById('emailLineHeightInput'),
  emailLineHeightValue: document.getElementById('emailLineHeightValue'),
  cardBgInput: document.getElementById('cardBgInput'),
  nameSizeInput: document.getElementById('nameSizeInput'),
  nameSizeValue: document.getElementById('nameSizeValue'),
  titleSizeInput: document.getElementById('titleSizeInput'),
  roleSizeValue: document.getElementById('roleSizeValue'),
  nameBoldInput: document.getElementById('nameBoldInput'),
  nameLineHeightInput: document.getElementById('nameLineHeightInput'),
  nameLineHeightValue: document.getElementById('nameLineHeightValue'),
  roleLineHeightInput: document.getElementById('roleLineHeightInput'),
  roleLineHeightValue: document.getElementById('roleLineHeightValue'),
  nameTrackingInput: document.getElementById('nameTrackingInput'),
  nameTrackingValue: document.getElementById('nameTrackingValue'),
  roleTrackingInput: document.getElementById('roleTrackingInput'),
  roleTrackingValue: document.getElementById('roleTrackingValue'),
  nameWeightInput: document.getElementById('nameWeightInput'),
  roleWeightInput: document.getElementById('roleWeightInput'),
  cardShapeInput: document.getElementById('cardShapeInput'),
  cardLayoutInput: document.getElementById('cardLayoutInput'),
  avatarStyleInput: document.getElementById('avatarStyleInput'),
  cardElevationInput: document.getElementById('cardElevationInput'),
  cardElevationValue: document.getElementById('cardElevationValue'),
  backgroundImageInput: document.getElementById('backgroundImageInput'),
  autoConnectToggle: document.getElementById('autoConnectToggle'),
  undoBtn: document.getElementById('undoBtn'),
  redoBtn: document.getElementById('redoBtn'),
  fitAllBtn: document.getElementById('fitAllBtn'),
  cleanupLayoutBtn: document.getElementById('cleanupLayoutBtn'),
  toggleMinimapBtn: document.getElementById('toggleMinimapBtn'),
  toggleLegendBtn: document.getElementById('toggleLegendBtn'),
  toggleReportCountsBtn: document.getElementById('toggleReportCountsBtn'),
  clearChartBtn: document.getElementById('clearChartBtn'),
  clearCanvasBtn: document.getElementById('clearCanvasBtn'),
  saveChartBtn: document.getElementById('saveChartBtn'),
  exportChartBtn: document.getElementById('exportChartBtn'),
  exportMenu: document.getElementById('exportMenu'),
  exportXlsxBtn: document.getElementById('exportXlsxBtn'),
  exportMenuPngBtn: document.getElementById('exportMenuPngBtn'),
  exportMenuSvgBtn: document.getElementById('exportMenuSvgBtn'),
  exportMenuPptxBtn: document.getElementById('exportMenuPptxBtn'),
  exportMenuPdfBtn: document.getElementById('exportMenuPdfBtn'),
  helpBtn: document.getElementById('helpBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  zoomResetBtn: document.getElementById('zoomResetBtn'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  statusText: document.getElementById('statusText'),
  previewHost: document.getElementById('previewHost'),
  canvasWorld: document.getElementById('canvasWorld'),
  canvasMinimap: document.getElementById('canvasMinimap'),
  minimapContent: document.getElementById('minimapContent'),
  minimapViewport: document.getElementById('minimapViewport'),
  chartSettingsModal: document.getElementById('chartSettingsModal'),
  chartSettingsCloseBtn: document.getElementById('chartSettingsCloseBtn'),
  chartSettingsDetailsTab: document.getElementById('chartSettingsDetailsTab'),
  chartSettingsPermissionsTab: document.getElementById('chartSettingsPermissionsTab'),
  chartSettingsDetailsPane: document.getElementById('chartSettingsDetailsPane'),
  chartSettingsPermissionsPane: document.getElementById('chartSettingsPermissionsPane'),
  chartSettingsNameInput: document.getElementById('chartSettingsNameInput'),
  chartSettingsCreatedByInput: document.getElementById('chartSettingsCreatedByInput'),
  chartSettingsCreatedDateInput: document.getElementById('chartSettingsCreatedDateInput'),
  chartPermissionNameInput: document.getElementById('chartPermissionNameInput'),
  chartPermissionEmailInput: document.getElementById('chartPermissionEmailInput'),
  chartPermissionUserTypeInput: document.getElementById('chartPermissionUserTypeInput'),
  chartPermissionScopeInput: document.getElementById('chartPermissionScopeInput'),
  chartPermissionInviteBtn: document.getElementById('chartPermissionInviteBtn'),
  chartPermissionsTableBody: document.getElementById('chartPermissionsTableBody'),
  chartSettingsSaveBtn: document.getElementById('chartSettingsSaveBtn'),
  helpModal: document.getElementById('helpModal'),
  helpCloseBtn: document.getElementById('helpCloseBtn')
};

function createAvatar(name, seed = 0) {
  const initials = (name || 'TM')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
  const hue = (seed * 47 + 13) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="180"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="hsl(${hue} 65% 72%)"/><stop offset="100%" stop-color="hsl(${(hue + 40) % 360} 50% 48%)"/></linearGradient></defs><rect width="220" height="180" rx="18" fill="url(#g)"/><text x="50%" y="57%" text-anchor="middle" font-family="Manrope" font-size="64" font-weight="800" fill="rgba(255,255,255,0.92)">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function notify(message) {
  if (dom.statusText) {
    dom.statusText.textContent = message;
  }
}

const HISTORY_LIMIT = 50;
const historyState = {
  undoStack: [],
  redoStack: [],
  restoring: false
};

function cloneForHistory(value) {
  return structuredClone(value);
}

function canvasHistorySnapshot() {
  return {
    rows: cloneForHistory(state.rows),
    nodes: cloneForHistory(state.nodes),
    manualLinks: cloneForHistory(state.manualLinks),
    selectedCardId: state.selectedCardId,
    nodeSequence: state.nodeSequence,
    settings: cloneForHistory(state.settings),
    autoConnect: state.autoConnect,
    canvasZoom: state.canvasZoom,
    canvasBoardWidth: state.canvasBoardWidth,
    canvasBoardHeight: state.canvasBoardHeight
  };
}

function snapshotsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function updateHistoryButtons() {
  if (dom.undoBtn) {
    dom.undoBtn.disabled = historyState.undoStack.length === 0;
  }
  if (dom.redoBtn) {
    dom.redoBtn.disabled = historyState.redoStack.length === 0;
  }
}

function updateToolbarViewButtons() {
  const showMinimap = state.showMinimap !== false;
  const showLegend = state.settings.showChartLegend !== false && state.settings.legendPosition !== 'hidden' && state.settings.orgChartColorBy !== 'none';
  const showReportCounts = state.settings.showReportCountBadge === true;

  dom.canvasMinimap?.classList.toggle('is-hidden', !showMinimap);

  if (dom.toggleMinimapBtn) {
    const label = dom.toggleMinimapBtn.querySelector('.toolbar-btn-label');
    const nextLabel = showMinimap ? 'Hide Mini Map' : 'Show Mini Map';
    if (label) {
      label.textContent = nextLabel;
    }
    dom.toggleMinimapBtn.setAttribute('aria-label', nextLabel);
    dom.toggleMinimapBtn.setAttribute('title', nextLabel);
    dom.toggleMinimapBtn.setAttribute('aria-pressed', String(showMinimap));
  }

  if (dom.toggleLegendBtn) {
    const label = dom.toggleLegendBtn.querySelector('.toolbar-btn-label');
    const nextLabel = showLegend ? 'Hide Legend' : 'Show Legend';
    if (label) {
      label.textContent = nextLabel;
    }
    dom.toggleLegendBtn.setAttribute('aria-label', nextLabel);
    dom.toggleLegendBtn.setAttribute('title', nextLabel);
    dom.toggleLegendBtn.setAttribute('aria-pressed', String(showLegend));
  }

  if (dom.toggleReportCountsBtn) {
    const label = dom.toggleReportCountsBtn.querySelector('.toolbar-btn-label');
    const nextLabel = showReportCounts ? 'Hide Report Counts' : 'Show Report Counts';
    if (label) {
      label.textContent = nextLabel;
    }
    dom.toggleReportCountsBtn.setAttribute('aria-label', nextLabel);
    dom.toggleReportCountsBtn.setAttribute('title', nextLabel);
    dom.toggleReportCountsBtn.setAttribute('aria-pressed', String(showReportCounts));
  }
}

function setTopbarView(view) {
  document.querySelectorAll('.app-page').forEach((page) => {
    const active = page.dataset.page === view;
    page.hidden = !active;
    page.classList.toggle('is-active', active);
  });
  document.querySelectorAll('.topbar-nav-btn').forEach((btn) => {
    const active = btn.dataset.topbarView === view;
    btn.classList.toggle('is-active', active);
    if (active) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
  state.currentTopbarView = view;
}

function pushCanvasHistory(snapshot = canvasHistorySnapshot()) {
  if (historyState.restoring) {
    return;
  }
  const last = historyState.undoStack[historyState.undoStack.length - 1];
  if (last && snapshotsEqual(snapshot, last)) {
    updateHistoryButtons();
    return;
  }
  historyState.undoStack.push(snapshot);
  if (historyState.undoStack.length > HISTORY_LIMIT) {
    historyState.undoStack.shift();
  }
  historyState.redoStack = [];
  updateHistoryButtons();
}

function restoreCanvasHistorySnapshot(snapshot) {
  state.rows = cloneForHistory(snapshot.rows);
  state.nodes = cloneForHistory(snapshot.nodes);
  state.manualLinks = cloneForHistory(snapshot.manualLinks);
  state.selectedCardId = snapshot.selectedCardId;
  state.nodeSequence = snapshot.nodeSequence;
  state.settings = normalizeSettings(cloneForHistory(snapshot.settings));
  state.autoConnect = snapshot.autoConnect;
  state.canvasZoom = snapshot.canvasZoom;
  state.canvasBoardWidth = snapshot.canvasBoardWidth;
  state.canvasBoardHeight = snapshot.canvasBoardHeight;
  syncControls();
  refreshCanvas(true, { centerContent: true, smoothCenter: false });
}

function undoCanvasChange() {
  const previous = historyState.undoStack.pop();
  if (!previous) {
    updateHistoryButtons();
    return;
  }
  historyState.redoStack.push(canvasHistorySnapshot());
  historyState.restoring = true;
  restoreCanvasHistorySnapshot(previous);
  historyState.restoring = false;
  updateHistoryButtons();
  notify('Undid last canvas change.');
}

function redoCanvasChange() {
  const next = historyState.redoStack.pop();
  if (!next) {
    updateHistoryButtons();
    return;
  }
  historyState.undoStack.push(canvasHistorySnapshot());
  historyState.restoring = true;
  restoreCanvasHistorySnapshot(next);
  historyState.restoring = false;
  updateHistoryButtons();
  notify('Redid canvas change.');
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes)) {
    return '';
  }
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function setLibraryUploadStatus(message, tone = 'info') {
  if (!dom.libraryUploadStatus) {
    return;
  }
  dom.libraryUploadStatus.textContent = message;
  dom.libraryUploadStatus.dataset.tone = tone;
}

function setLibraryImportBusy(isBusy) {
  if (dom.loadLibraryZipBtn) {
    dom.loadLibraryZipBtn.disabled = isBusy;
    dom.loadLibraryZipBtn.textContent = isBusy ? 'Loading...' : 'Load ZIP';
  }
  if (dom.libraryZipInput) {
    dom.libraryZipInput.disabled = isBusy;
  }
  if (dom.removeLibraryZipBtn) {
    dom.removeLibraryZipBtn.disabled = isBusy;
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function withAlpha(color, alphaHex) {
  if (typeof color !== 'string') {
    return color;
  }
  const value = color.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(value)) {
    return `${value}${alphaHex}`;
  }
  if (/^#[0-9a-fA-F]{3}$/.test(value)) {
    const expanded = `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
    return `${expanded}${alphaHex}`;
  }
  return value;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hashToUnit(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}

function getMemberById(memberId) {
  return state.members.find((member) => member.id === memberId);
}

function getCardWidthScaleFactor() {
  const raw = Number(state.settings.cardWidthScale);
  if (!Number.isFinite(raw)) {
    return 1;
  }
  return clamp(raw / 100, 0.5, 1.3);
}

function getCardHeightScaleFactor() {
  const raw = Number(state.settings.cardHeightScale);
  if (!Number.isFinite(raw)) {
    return 1;
  }
  return clamp(raw / 100, 0.45, 1.3);
}

function getCardTextScaleFactor() {
  return Math.min(getCardWidthScaleFactor(), getCardHeightScaleFactor());
}

function currentCardSize() {
  let width = 300;
  let height = 102;

  if (state.settings.cardStyle === 'pill') {
    width = 470;
    height = 110;
  } else if (state.settings.cardStyle === 'intro') {
    width = 226;
    height = 312;
  }

  if (state.settings.cardLayout === 'avatar-top') {
    width = Math.max(width, 260);
    height = Math.max(height, 180);
  } else if (state.settings.cardLayout === 'compact') {
    width = Math.max(220, Math.floor(width * 0.88));
    height = Math.max(82, Math.floor(height * 0.84));
  }

  const widthScale = getCardWidthScaleFactor();
  const heightScale = getCardHeightScaleFactor();
  width = Math.round(width * widthScale);
  height = Math.max(96, Math.round(height * heightScale));

  return { width, height };
}

function getSpacingScale() {
  if (state.settings.nodeSpacing === 'compact') {
    return 0.72;
  }
  if (state.settings.nodeSpacing === 'spacious') {
    return 1.28;
  }
  return 1;
}

function getVisibleLayerBounds() {
  const bodyWidth = dom.cardLayer.clientWidth || 1280;
  const bodyHeight = dom.cardLayer.clientHeight || 560;
  const layerRect = dom.cardLayer.getBoundingClientRect();
  const hostRect = dom.previewHost?.getBoundingClientRect();

  if (!hostRect || layerRect.width <= 0 || layerRect.height <= 0) {
    return { left: 0, right: bodyWidth, top: 0, bottom: bodyHeight };
  }

  const scaleX = bodyWidth / layerRect.width;
  const scaleY = bodyHeight / layerRect.height;
  const visibleLeft = clamp((Math.max(hostRect.left, layerRect.left) - layerRect.left) * scaleX, 0, bodyWidth);
  const visibleRight = clamp((Math.min(hostRect.right, layerRect.right) - layerRect.left) * scaleX, 0, bodyWidth);
  const visibleTop = clamp((Math.max(hostRect.top, layerRect.top) - layerRect.top) * scaleY, 0, bodyHeight);
  const visibleBottom = clamp((Math.min(hostRect.bottom, layerRect.bottom) - layerRect.top) * scaleY, 0, bodyHeight);

  return {
    left: visibleRight > visibleLeft ? visibleLeft : 0,
    right: visibleRight > visibleLeft ? visibleRight : bodyWidth,
    top: visibleBottom > visibleTop ? visibleTop : 0,
    bottom: visibleBottom > visibleTop ? visibleBottom : bodyHeight
  };
}

function getBodyMetrics() {
  const cardSize = currentCardSize();
  const base = canvasBaseSize();
  const bodyWidth = dom.cardLayer.clientWidth || 1280;
  const bodyHeight = dom.cardLayer.clientHeight || 560;
  const halfWidth = cardSize.width / 2;
  const halfHeight = cardSize.height / 2;
  const spacing = getSpacingScale();
  const sidePadding = (state.settings.cardStyle === 'pill' ? 34 : 24) * spacing;
  const topPadding = (state.settings.cardStyle === 'intro' ? 24 : 16) * spacing;
  const bottomPadding = (state.settings.cardStyle === 'intro' ? 30 : 18) * spacing;
  const stageWidth = Math.min(Math.max(bodyWidth * 0.82, 1080), Math.max(base.width * 0.56, 1080));
  const stageHeight = Math.min(Math.max(bodyHeight * 0.76, 640), Math.max(base.height * 0.48, 640));
  const centerX = base.width / 2;
  const centerY = base.height / 2;
  const stageLeft = centerX - stageWidth / 2;
  const stageRight = centerX + stageWidth / 2;
  const stageTop = centerY - stageHeight / 2;
  const stageBottom = centerY + stageHeight / 2;
  const left = stageLeft + halfWidth + sidePadding;
  const right = stageRight - halfWidth - sidePadding;
  const top = stageTop + halfHeight + topPadding;
  const bottom = stageBottom - halfHeight - bottomPadding;
  const fallbackCenterX = centerX;
  const fallbackCenterY = centerY;

  return {
    top: top <= bottom ? top : fallbackCenterY,
    bottom: top <= bottom ? bottom : fallbackCenterY,
    left: left <= right ? left : fallbackCenterX,
    right: left <= right ? right : fallbackCenterX
  };
}

function computeRowY(index, count) {
  const metrics = getBodyMetrics();
  if (metrics.bottom <= metrics.top) {
    return metrics.top;
  }
  if (count <= 1) {
    return (metrics.top + metrics.bottom) / 2;
  }
  const span = metrics.bottom - metrics.top;
  return metrics.top + (span / (count - 1)) * index;
}

function computeRowYFromDirection(index, count) {
  const y = computeRowY(index, count);
  if (state.settings.hierarchyDirection === 'bottom-up') {
    const metrics = getBodyMetrics();
    return metrics.top + metrics.bottom - y;
  }
  return y;
}

function getTargetRowCount(actualRowCount) {
  const configured = Number(state.settings.canvasRowCount);
  if (!Number.isFinite(configured) || configured <= 0) {
    return actualRowCount;
  }
  return Math.max(actualRowCount, configured);
}

function mapRowToDisplayIndex(rowIndex, actualRowCount, targetRowCount) {
  if (actualRowCount <= 1) {
    return Math.floor((targetRowCount - 1) / 2);
  }
  if (targetRowCount <= actualRowCount) {
    return rowIndex;
  }
  return Math.round((rowIndex * (targetRowCount - 1)) / (actualRowCount - 1));
}

function computeRowCenters(rowLength) {
  const metrics = getBodyMetrics();
  if (rowLength === 1) {
    return [(metrics.left + metrics.right) / 2];
  }
  const span = metrics.right - metrics.left;
  const step = span / Math.max(1, rowLength - 1);
  return Array.from({ length: rowLength }, (_, index) => metrics.left + index * step);
}

function findRowForPrimaryAxis(primaryPoint) {
  if (state.rows.length === 0) {
    return { index: 0, create: true };
  }
  const rowCenters = state.rows.map((_, rowIndex) => {
    if (isHorizontalHierarchy()) {
      const metrics = getBodyMetrics();
      if (state.rows.length <= 1) {
        return (metrics.left + metrics.right) / 2;
      }
      const span = metrics.right - metrics.left;
      return metrics.left + (span / (state.rows.length - 1)) * rowIndex;
    }
    return computeRowYFromDirection(rowIndex, state.rows.length);
  });
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  rowCenters.forEach((centerValue, index) => {
    const distance = Math.abs(centerValue - primaryPoint);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  if (nearestDistance < 64) {
    return { index: nearestIndex, create: false };
  }

  let insertIndex = state.rows.length;
  for (let i = 0; i < rowCenters.length; i += 1) {
    if (primaryPoint < rowCenters[i]) {
      insertIndex = i;
      break;
    }
  }
  return { index: insertIndex, create: true };
}

function isHorizontalHierarchy() {
  return state.settings.hierarchyDirection === 'left-right' || state.settings.hierarchyDirection === 'right-left';
}

function layerPointFromClient(clientX, clientY) {
  const layerRect = dom.cardLayer.getBoundingClientRect();
  const layerWidth = dom.cardLayer.clientWidth || 1280;
  const layerHeight = dom.cardLayer.clientHeight || 560;
  const x = layerRect.width > 0 ? ((clientX - layerRect.left) / layerRect.width) * layerWidth : 0;
  const y = layerRect.height > 0 ? ((clientY - layerRect.top) / layerRect.height) * layerHeight : 0;
  return {
    x: clamp(x, 0, layerWidth),
    y: clamp(y, 0, layerHeight)
  };
}

function clampManualNodePosition(x, y) {
  const cardSize = currentCardSize();
  const base = canvasBaseSize();
  const layerWidth = base.width;
  const layerHeight = base.height;
  return {
    xCenter: clamp(x, cardSize.width / 2 + 8, layerWidth - cardSize.width / 2 - 8),
    yCenter: clamp(y, cardSize.height / 2 + 8, layerHeight - cardSize.height / 2 - 8)
  };
}

function clearConnectTargetHighlights() {
  dom.cardLayer.querySelectorAll('.connect-target').forEach((element) => {
    element.classList.remove('connect-target');
    element.removeAttribute('data-connect-side');
  });
}

function rowAxisCenters() {
  const metrics = getBodyMetrics();
  const count = state.rows.length;
  if (count === 0) {
    return [];
  }

  if (isHorizontalHierarchy()) {
    if (count <= 1) {
      return [(metrics.left + metrics.right) / 2];
    }
    const span = metrics.right - metrics.left;
    return state.rows.map((_, rowIndex) => {
      const center = metrics.left + (span / (count - 1)) * rowIndex;
      return state.settings.hierarchyDirection === 'right-left' ? metrics.left + metrics.right - center : center;
    });
  }

  return state.rows.map((_, rowIndex) => computeRowYFromDirection(rowIndex, count));
}

function rowIndexForNode(nodeId) {
  return state.rows.findIndex((row) => row.includes(nodeId));
}

function findConnectDropTarget(x, y, movingNodeId = null) {
  const layouts = rowLayouts();
  const cardSize = currentCardSize();
  const threshold = Math.max(180, Math.min(360, Math.max(cardSize.width, cardSize.height) * 1.25));
  let best = null;

  Object.entries(layouts).forEach(([nodeId, layout]) => {
    if (nodeId === movingNodeId) {
      return;
    }
    const dx = x - layout.xCenter;
    const dy = y - layout.yCenter;
    const distance = Math.hypot(dx, dy);
    if (distance > threshold || (best && distance >= best.distance)) {
      return;
    }
    const side =
      Math.abs(dx) > Math.abs(dy)
        ? dx < 0
          ? 'left'
          : 'right'
        : dy < 0
          ? 'top'
          : 'bottom';
    best = { targetId: nodeId, targetLayout: layout, side, distance };
  });

  return best;
}

function snapPointForConnection(target) {
  const cardSize = currentCardSize();
  const levelGap = Math.max(72, Number(state.settings.levelSpacing || 160) * 0.72);
  const siblingGap = Math.max(46, Number(state.settings.siblingSpacing || 80) * 0.58);
  const targetLayout = target.targetLayout;
  let xCenter = targetLayout.xCenter;
  let yCenter = targetLayout.yCenter;

  if (target.side === 'left') {
    xCenter = targetLayout.x - siblingGap - cardSize.width / 2;
  } else if (target.side === 'right') {
    xCenter = targetLayout.x + targetLayout.width + siblingGap + cardSize.width / 2;
  } else if (target.side === 'top') {
    yCenter = targetLayout.y - levelGap - cardSize.height / 2;
  } else {
    yCenter = targetLayout.y + targetLayout.height + levelGap + cardSize.height / 2;
  }

  return clampManualNodePosition(xCenter, yCenter);
}

function ensureManualLink(fromNodeId, toNodeId) {
  if (!fromNodeId || !toNodeId || fromNodeId === toNodeId) {
    return false;
  }
  const exists = state.manualLinks.some(
    (link) =>
      (link.from === fromNodeId && link.to === toNodeId) ||
      (link.from === toNodeId && link.to === fromNodeId)
  );
  if (exists) {
    return false;
  }
  state.manualLinks.push({ from: fromNodeId, to: toNodeId });
  return true;
}

function guideCenterForTarget(target) {
  const metrics = getBodyMetrics();
  const horizontal = isHorizontalHierarchy();
  const min = horizontal ? metrics.left : metrics.top;
  const max = horizontal ? metrics.right : metrics.bottom;
  const centers = rowAxisCenters();

  if (!target.create && centers[target.index] != null) {
    return clamp(centers[target.index], min, max);
  }

  if (centers.length === 0) {
    return (min + max) / 2;
  }

  if (target.index <= 0) {
    const gap = centers[1] != null ? Math.abs(centers[1] - centers[0]) : Number(state.settings.levelSpacing || 160);
    return clamp(centers[0] - gap / 2, min, max);
  }

  if (target.index >= centers.length) {
    const last = centers.length - 1;
    const gap = centers[last - 1] != null ? Math.abs(centers[last] - centers[last - 1]) : Number(state.settings.levelSpacing || 160);
    return clamp(centers[last] + gap / 2, min, max);
  }

  return clamp((centers[target.index - 1] + centers[target.index]) / 2, min, max);
}

function updateDragDropGuide(clientX, clientY, movingNodeId = null) {
  if (!dom.dragDropGuide) {
    return;
  }
  clearConnectTargetHighlights();
  dom.dragDropGuide.className = 'drag-drop-guide is-hidden';
  dom.dragDropGuide.removeAttribute('style');
}

function hideDragDropGuide() {
  if (!dom.dragDropGuide) {
    return;
  }
  clearConnectTargetHighlights();
  dom.dragDropGuide.className = 'drag-drop-guide is-hidden';
  dom.dragDropGuide.removeAttribute('style');
}

function insertNodeIntoRow(row, nodeId, secondaryPoint) {
  if (row.length === 0) {
    row.push(nodeId);
    return;
  }

  const centers =
    isHorizontalHierarchy()
      ? (() => {
          const metrics = getBodyMetrics();
          if (row.length === 1) {
            return [(metrics.top + metrics.bottom) / 2];
          }
          const span = metrics.bottom - metrics.top;
          const step = span / Math.max(1, row.length - 1);
          return Array.from({ length: row.length }, (_, index) => metrics.top + index * step);
        })()
      : computeRowCenters(row.length);
  const sortable = row
    .map((id, index) => ({ id, center: centers[index] }))
    .sort((a, b) => a.center - b.center);

  let insertPosition = sortable.length;
  for (let i = 0; i < sortable.length; i += 1) {
    if (secondaryPoint < sortable[i].center) {
      insertPosition = i;
      break;
    }
  }

  row.splice(insertPosition, 0, nodeId);
}

function ensureNodeInCanvasRegistry(nodeId) {
  if (state.rows.some((row) => row.includes(nodeId))) {
    return;
  }
  if (!state.rows.length) {
    state.rows.push([]);
  }
  state.rows[0].push(nodeId);
}

function placeNodeAtPoint(nodeId, x, y) {
  const node = state.nodes[nodeId];
  const connectTarget = findConnectDropTarget(x, y, nodeId);
  if (connectTarget) {
    const snapPoint = snapPointForConnection(connectTarget);
    x = snapPoint.xCenter;
    y = snapPoint.yCenter;
  }
  ensureCanvasBoardContainsPoint(x, y);

  removeNodeFromRows(nodeId);
  if (node) {
    const manualPosition = clampManualNodePosition(x, y);
    node.manualPosition = true;
    node.xCenter = manualPosition.xCenter;
    node.yCenter = manualPosition.yCenter;
  }
  ensureNodeInCanvasRegistry(nodeId);
  if (connectTarget) {
    ensureManualLink(connectTarget.targetId, nodeId);
  }
  compactRows();
  render({ centerContent: true });
}

function removeNodeFromRows(nodeId) {
  state.rows.forEach((row) => {
    const index = row.indexOf(nodeId);
    if (index >= 0) {
      row.splice(index, 1);
    }
  });
  compactRows();
}

function compactRows() {
  state.rows = state.rows.filter((row) => row.length > 0);
}

function addNode(memberId, x, y, options = {}) {
  const persist = options.persist !== false;
  const existingNodeId = Object.values(state.nodes).find((node) => node.memberId === memberId)?.id || null;
  if (existingNodeId) {
    placeNodeAtPoint(existingNodeId, x, y);
    state.selectedCardId = existingNodeId;
    state.selectedMemberId = memberId;
    refreshCanvas(false, { centerContent: false });
    if (persist) {
      scheduleStatePersistence();
    }
    return existingNodeId;
  }
  const nodeId = `n${state.nodeSequence++}`;
  state.nodes[nodeId] = { id: nodeId, memberId };
  placeNodeAtPoint(nodeId, x, y);
  state.selectedCardId = nodeId;
  state.selectedMemberId = memberId;
  refreshCanvas(false, { centerContent: false });
  if (persist) {
    scheduleStatePersistence();
  }
  return nodeId;
}

function clearCanvas() {
  state.rows = [];
  state.nodes = {};
  state.manualLinks = [];
  state.selectedCardId = null;
  state.selectedMemberId = null;
  state.canvasBoardWidth = null;
  state.canvasBoardHeight = null;
  requestAnimationFrame(() => centerCanvasOnContent({}, false));
}

function removeCanvasNode(nodeId) {
  const node = state.nodes[nodeId];
  if (!node) {
    return;
  }
  pushCanvasHistory();
  const member = getMemberById(node.memberId);
  removeNodeFromRows(nodeId);
  delete state.nodes[nodeId];
  state.manualLinks = state.manualLinks.filter((link) => link.from !== nodeId && link.to !== nodeId);
  if (state.selectedCardId === nodeId) {
    state.selectedCardId = null;
  }
  if (state.selectedMemberId === node.memberId) {
    state.selectedMemberId = null;
  }
  render();
  notify(member ? `Removed ${member.name} from canvas.` : 'Card removed from canvas.');
}

function sortedDepartments() {
  const all = new Set(state.members.map((member) => member.department).filter(Boolean));
  return ['All Departments', ...Array.from(all).sort((a, b) => a.localeCompare(b))];
}

function sortedPositions() {
  const all = new Set(state.members.map((member) => member.title).filter(Boolean));
  return ['All Positions', ...Array.from(all).sort((a, b) => a.localeCompare(b))];
}

function fillDepartmentFilter() {
  const options = sortedDepartments();
  const previous = dom.memberDepartmentFilter.value;
  dom.memberDepartmentFilter.innerHTML = options
    .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
    .join('');
  if (options.includes(previous)) {
    dom.memberDepartmentFilter.value = previous;
  }
}

function fillPositionFilter() {
  const options = sortedPositions();
  const previous = dom.memberPositionFilter?.value || 'All Positions';
  dom.memberPositionFilter.innerHTML = options
    .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
    .join('');
  if (options.includes(previous)) {
    dom.memberPositionFilter.value = previous;
  }
}

function fillDepartmentRemovalOptions() {
  if (!dom.removeDepartmentInput) {
    return;
  }
  const departments = sortedDepartments().filter((name) => name !== 'All Departments');
  const previous = dom.removeDepartmentInput.value;
  dom.removeDepartmentInput.innerHTML = departments.length
    ? departments.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('')
    : '<option value="">No departments</option>';
  if (departments.includes(previous)) {
    dom.removeDepartmentInput.value = previous;
  }
}

function removeNodesForMemberIds(memberIds) {
  const memberSet = new Set(memberIds);
  const nodeIdsToRemove = Object.values(state.nodes)
    .filter((node) => memberSet.has(node.memberId))
    .map((node) => node.id);
  if (nodeIdsToRemove.length === 0) {
    return;
  }

  const nodeSet = new Set(nodeIdsToRemove);
  nodeIdsToRemove.forEach((nodeId) => {
    removeNodeFromRows(nodeId);
    delete state.nodes[nodeId];
  });
  state.manualLinks = state.manualLinks.filter((link) => !nodeSet.has(link.from) && !nodeSet.has(link.to));
  if (state.selectedCardId && nodeSet.has(state.selectedCardId)) {
    state.selectedCardId = null;
  }
  if (state.selectedMemberId && memberSet.has(state.selectedMemberId)) {
    state.selectedMemberId = null;
  }
}

function removeMember(memberId) {
  const member = getMemberById(memberId);
  if (!member) {
    return;
  }
  if (activeZipPhotoUrls.has(member.photo)) {
    URL.revokeObjectURL(member.photo);
    activeZipPhotoUrls.delete(member.photo);
  }
  state.members = state.members.filter((item) => item.id !== memberId);
  if (state.editingMemberId === memberId) {
    resetMemberForm();
  }
  removeNodesForMemberIds([memberId]);
  renderLibrary();
  render();
  scheduleFullStatePersistence();
  notify(`Removed ${member.name} from team library.`);
}

function removeDepartment() {
  const department = dom.removeDepartmentInput.value;
  if (!department) {
    notify('No department selected.');
    return;
  }
  const membersInDepartment = state.members.filter((member) => member.department === department);
  if (membersInDepartment.length === 0) {
    notify(`No members found in ${department}.`);
    return;
  }

  const memberIds = membersInDepartment.map((member) => member.id);
  state.members = state.members.filter((member) => member.department !== department);
  removeNodesForMemberIds(memberIds);
  if (dom.memberDepartmentFilter.value === department) {
    dom.memberDepartmentFilter.value = 'All Departments';
  }
  renderLibrary();
  render();
  scheduleFullStatePersistence();
  notify(`Removed department ${department} (${memberIds.length} members).`);
}

function clearLibraryMembers() {
  releaseZipPhotoUrls();
  state.members = [];
  resetMemberForm();
  clearCanvas();
  renderLibrary();
  render();
  scheduleFullStatePersistence();
  notify('Team library cleared.');
}

function resetMemberForm() {
  state.editingMemberId = null;
  if (dom.newMemberName) dom.newMemberName.value = '';
  if (dom.newMemberTitle) dom.newMemberTitle.value = '';
  if (dom.newMemberDepartment) dom.newMemberDepartment.value = '';
  if (dom.newMemberEmail) dom.newMemberEmail.value = '';
  if (dom.newMemberPhoto) dom.newMemberPhoto.value = '';
  if (dom.memberFormSummary) {
    dom.memberFormSummary.textContent = 'Build From Image';
  }
  if (dom.addMemberBtn) {
    dom.addMemberBtn.textContent = 'Add Member';
  }
  if (dom.cancelEditMemberBtn) {
    dom.cancelEditMemberBtn.hidden = true;
  }
  closeMemberEditModal();
}

function startMemberEdit(memberId) {
  const member = getMemberById(memberId);
  if (!member) {
    return;
  }
  if (!dom.newMemberName || !dom.newMemberTitle || !dom.newMemberDepartment) {
    notify('Team members are managed from the ZIP library.');
    return;
  }
  state.editingMemberId = memberId;
  state.selectedMemberId = memberId;
  dom.newMemberName.value = member.name || '';
  dom.newMemberTitle.value = member.title || '';
  dom.newMemberDepartment.value = member.department || '';
  if (dom.newMemberEmail) dom.newMemberEmail.value = member.email || '';
  dom.newMemberPhoto.value = '';
  if (dom.memberFormSummary) {
    dom.memberFormSummary.textContent = 'Edit Team Member';
  }
  if (dom.addMemberBtn) {
    dom.addMemberBtn.textContent = 'Save Changes';
  }
  if (dom.cancelEditMemberBtn) {
    dom.cancelEditMemberBtn.hidden = false;
  }
  openMemberEditModal();
  notify(`Editing ${member.name}. Update fields and click Save Changes.`);
}

function openMemberEditModal() {
  if (!dom.memberEditModal) {
    return;
  }
  dom.memberEditModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => dom.newMemberName?.focus());
}

function closeMemberEditModal() {
  if (!dom.memberEditModal) {
    return;
  }
  dom.memberEditModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function visibleMembers() {
  const searchValue = dom.memberSearch.value.trim().toLowerCase();
  const departmentValue = dom.memberDepartmentFilter.value;
  const positionValue = dom.memberPositionFilter?.value || 'All Positions';

  const ranked = state.members
    .map((member) => {
      const matchesDepartment =
        departmentValue === 'All Departments' || departmentValue === '' || member.department === departmentValue;
      const matchesPosition =
        positionValue === 'All Positions' || positionValue === '' || member.title === positionValue;
      if (!matchesDepartment || !matchesPosition) {
        return null;
      }

      const memberInitials = getMemberInitials(member).toLowerCase();
      const nameValue = String(member.name || '').toLowerCase();
      const titleValue = String(member.title || '').toLowerCase();
      const departmentValueText = String(member.department || '').toLowerCase();
      const searchTerm = searchValue;

      if (!searchTerm) {
        return { member, score: 0 };
      }

      const initialsExact = memberInitials === searchTerm ? 0 : Infinity;
      const initialsPrefix = memberInitials.startsWith(searchTerm) ? 1 : Infinity;
      const initialsContains = memberInitials.includes(searchTerm) ? 2 : Infinity;
      const nameStarts = nameValue.startsWith(searchTerm) ? 3 : Infinity;
      const nameContains = nameValue.includes(searchTerm) ? 4 : Infinity;
      const titleContains = titleValue.includes(searchTerm) ? 5 : Infinity;
      const departmentContains = departmentValueText.includes(searchTerm) ? 6 : Infinity;
      const haystack = `${memberInitials} ${nameValue} ${titleValue} ${departmentValueText}`;
      const haystackContains = haystack.includes(searchTerm) ? 7 : Infinity;
      const score = Math.min(
        initialsExact,
        initialsPrefix,
        initialsContains,
        nameStarts,
        nameContains,
        titleContains,
        departmentContains,
        haystackContains
      );

      if (!Number.isFinite(score)) {
        return null;
      }
      return { member, score };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || String(a.member.name || '').localeCompare(String(b.member.name || '')));

  return ranked.map((entry) => entry.member);
}

function getMemberInitials(member) {
  const savedInitials =
    member?.initials ||
    member?.teamMemberInitials ||
    member?.['Team Member Initials'] ||
    '';
  if (String(savedInitials).trim()) {
    return String(savedInitials).trim();
  }
  return String(member?.name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function renderLibrary() {
  fillDepartmentFilter();
  fillPositionFilter();
  fillDepartmentRemovalOptions();
  const members = visibleMembers();

  dom.libraryList.innerHTML = members.length
    ? members
    .map(
      (member) => `
        <div class="member-chip${state.selectedMemberId === member.id ? ' selected' : ''}" draggable="true" data-member-id="${member.id}" tabindex="0" role="button" aria-label="${escapeHtml(member.name)}">
          <img class="member-thumb" src="${member.photo}" alt="${escapeHtml(member.name)}" />
          <div class="member-meta">
            <div class="member-name">${escapeHtml(member.name)}</div>
            <div class="member-role">${escapeHtml(member.title)}</div>
            <div class="member-dept">${escapeHtml(member.department)}</div>
            ${member.email ? `<div class="member-detail">${escapeHtml(member.email)}</div>` : ''}
            ${member.location ? `<div class="member-detail">${escapeHtml(member.location)}</div>` : ''}
          </div>
          <div class="member-actions">
            <button class="member-edit-btn" type="button" data-edit-member-id="${member.id}" aria-label="Edit ${escapeHtml(member.name)}">Edit</button>
          </div>
        </div>
      `
    )
    .join('')
    : '<div class="library-empty">No team members yet. Add your first member above.</div>';

  dom.libraryList.querySelectorAll('.member-chip').forEach((chip) => {
    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/member-id', chip.dataset.memberId);
      event.dataTransfer.effectAllowed = 'copy';
    });
    chip.addEventListener('click', () => {
      state.selectedMemberId = chip.dataset.memberId;
      renderLibrary();
    });
  });

  dom.libraryList.querySelectorAll('.member-edit-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const memberId = button.dataset.editMemberId;
      if (memberId) {
        startMemberEdit(memberId);
      }
    });
  });
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function availableFonts() {
  if (!document.fonts?.check) {
    return FONT_CANDIDATES.slice();
  }
  return FONT_CANDIDATES.filter((font) => {
    try {
      return document.fonts.check(`16px "${font}"`);
    } catch {
      return true;
    }
  });
}

function populateFontSelect(select) {
  if (!select) {
    return;
  }
  const currentValue = select.value || select.getAttribute('data-current-value') || 'Arial';
  const fonts = availableFonts();
  const options = [...new Set(['Arial', ...fonts])];
  select.innerHTML = options
    .map((font) => `<option value="${escapeHtml(font)}">${escapeHtml(font)}</option>`)
    .join('');
  select.value = options.includes(currentValue) ? currentValue : options[0];
}

function populateFontSelectors() {
  populateFontSelect(dom.headingFontInput);
  populateFontSelect(dom.cardFontInput);
  populateFontSelect(dom.shapeFontInput);
  populateFontSelect(dom.departmentFontInput);
  populateFontSelect(dom.emailFontInput);
  populateFontSelect(dom.locationFontInput);
}

function syncTypographyFieldVisibility() {
  const fields = state.settings.employeeFields || {};
  const visibilityMap = {
    name: fields.name === true,
    title: fields.title === true,
    department: fields.department === true,
    email: fields.email === true,
    location: fields.location === true
  };
  Object.entries(visibilityMap).forEach(([key, visible]) => {
    const element = dom[`${key}Typography`];
    if (element) {
      element.hidden = !visible;
      element.style.display = visible ? '' : 'none';
      const divider = element.previousElementSibling;
      if (divider?.classList?.contains('section-divider')) {
        divider.hidden = !visible;
        divider.style.display = visible ? '' : 'none';
      }
    }
  });
}

function resetTypographySection(section) {
  const defaults = TYPOGRAPHY_DEFAULTS;
  if (!defaults) {
    return;
  }
  if (section === 'title') {
    state.settings.headingFont = defaults.headingFont || 'Arial';
    state.settings.headingWeight = defaults.headingWeight ?? 0;
    state.settings.headingSize = defaults.headingSize ?? 58;
    state.settings.headingLineHeight = defaults.headingLineHeight ?? 1.02;
    state.settings.headingTracking = defaults.headingTracking ?? 0;
    state.settings.headingColor = defaults.headingColor || state.settings.headingColor;
  } else if (section === 'name') {
    state.settings.cardFont = defaults.cardFont || defaults.headingFont || 'Arial';
    state.settings.nameWeight = defaults.nameWeight ?? 0;
    state.settings.roleWeight = defaults.roleWeight ?? 0;
    state.settings.nameSize = defaults.nameSize ?? 16;
    state.settings.roleSize = defaults.roleSize ?? 11;
    state.settings.nameLineHeight = defaults.nameLineHeight ?? 1.12;
    state.settings.roleLineHeight = defaults.roleLineHeight ?? 1.15;
    state.settings.nameTracking = defaults.nameTracking ?? 0;
    state.settings.roleTracking = defaults.roleTracking ?? 0;
  } else if (section === 'department') {
    state.settings.departmentFont = defaults.departmentFont || state.settings.cardFont || 'Arial';
    state.settings.departmentWeight = defaults.departmentWeight ?? 0;
    state.settings.departmentSize = defaults.departmentSize ?? 12;
    state.settings.departmentLineHeight = defaults.departmentLineHeight ?? 1.12;
  } else if (section === 'email') {
    state.settings.emailFont = defaults.emailFont || state.settings.cardFont || 'Arial';
    state.settings.emailWeight = defaults.emailWeight ?? 0;
    state.settings.emailSize = defaults.emailSize ?? 12;
    state.settings.emailLineHeight = defaults.emailLineHeight ?? 1.12;
  } else if (section === 'location') {
    state.settings.locationFont = defaults.locationFont || state.settings.cardFont || 'Arial';
    state.settings.locationWeight = defaults.locationWeight ?? 0;
    state.settings.locationSize = defaults.locationSize ?? 12;
    state.settings.locationLineHeight = defaults.locationLineHeight ?? 1.12;
  }
  syncControls();
  render();
  scheduleStatePersistence();
}

function setSliderFill(input) {
  if (!input) {
    return;
  }
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const value = Number(input.value || min);
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  input.style.setProperty('--fill', `${Math.max(0, Math.min(100, pct)).toFixed(2)}%`);
}

function setSliderLabelValue(element, value) {
  if (!element) {
    return;
  }
  element.textContent = value;
}

function syncTypographySliderState() {
  setSliderFill(dom.headingSizeInput);
  setSliderFill(dom.headingLineHeightInput);
  setSliderFill(dom.headingTrackingInput);
  setSliderFill(dom.nameSizeInput);
  setSliderFill(dom.titleSizeInput);
  setSliderFill(dom.nameLineHeightInput);
  setSliderFill(dom.roleLineHeightInput);
  setSliderFill(dom.nameTrackingInput);
  setSliderFill(dom.roleTrackingInput);
  setSliderFill(dom.departmentSizeInput);
  setSliderFill(dom.departmentLineHeightInput);
  setSliderFill(dom.emailSizeInput);
  setSliderFill(dom.emailLineHeightInput);
  setSliderFill(dom.locationSizeInput);
  setSliderFill(dom.locationLineHeightInput);
  setSliderFill(dom.connectorStartMarkerScaleInput);
  setSliderFill(dom.connectorWeightInput);
  setSliderFill(dom.connectorMarkerScaleInput);

  setSliderLabelValue(dom.headingSizeValue, `${Math.round(Number(dom.headingSizeInput?.value || state.settings.headingSize || 0))} px`);
  setSliderLabelValue(dom.headingLineHeightValue, `${(Number(dom.headingLineHeightInput?.value || Math.round((state.settings.headingLineHeight || 1.02) * 100)) / 100).toFixed(2)}x`);
  setSliderLabelValue(dom.headingTrackingValue, `${((Number(dom.headingTrackingInput?.value || Math.round((state.settings.headingTracking || 0) * 100))) / 100).toFixed(2)}em`);
  setSliderLabelValue(dom.nameSizeValue, `${Math.round(Number(dom.nameSizeInput?.value || state.settings.nameSize || 0))} px`);
  setSliderLabelValue(dom.roleSizeValue, `${Math.round(Number(dom.titleSizeInput?.value || state.settings.roleSize || 0))} px`);
  setSliderLabelValue(dom.nameLineHeightValue, `${(Number(dom.nameLineHeightInput?.value || Math.round((state.settings.nameLineHeight || 1.12) * 100)) / 100).toFixed(2)}x`);
  setSliderLabelValue(dom.roleLineHeightValue, `${(Number(dom.roleLineHeightInput?.value || Math.round((state.settings.roleLineHeight || 1.15) * 100)) / 100).toFixed(2)}x`);
  setSliderLabelValue(dom.nameTrackingValue, `${((Number(dom.nameTrackingInput?.value || Math.round((state.settings.nameTracking || 0) * 100))) / 100).toFixed(2)}em`);
  setSliderLabelValue(dom.roleTrackingValue, `${((Number(dom.roleTrackingInput?.value || Math.round((state.settings.roleTracking || 0) * 100))) / 100).toFixed(2)}em`);
  setSliderLabelValue(dom.departmentSizeValue, `${Math.round(Number(dom.departmentSizeInput?.value || state.settings.departmentSize || 0))} px`);
  setSliderLabelValue(dom.departmentLineHeightValue, `${(Number(dom.departmentLineHeightInput?.value || Math.round((state.settings.departmentLineHeight || 1.12) * 100)) / 100).toFixed(2)}x`);
  setSliderLabelValue(dom.emailSizeValue, `${Math.round(Number(dom.emailSizeInput?.value || state.settings.emailSize || 0))} px`);
  setSliderLabelValue(dom.emailLineHeightValue, `${(Number(dom.emailLineHeightInput?.value || Math.round((state.settings.emailLineHeight || 1.12) * 100)) / 100).toFixed(2)}x`);
  setSliderLabelValue(dom.locationSizeValue, `${Math.round(Number(dom.locationSizeInput?.value || state.settings.locationSize || 0))} px`);
  setSliderLabelValue(dom.locationLineHeightValue, `${(Number(dom.locationLineHeightInput?.value || Math.round((state.settings.locationLineHeight || 1.12) * 100)) / 100).toFixed(2)}x`);
}

const VIEW_COLOR_PALETTE = [
  '#3f71c4',
  '#ed2227',
  '#2f9b75',
  '#8b5cc8',
  '#d18a2f',
  '#2d9bb3',
  '#c75594',
  '#6c8f2f',
  '#5d6f8f',
  '#a15d3a'
];

function colorFromValue(value) {
  const key = String(value || 'Not Set');
  const index = Math.floor(hashToUnit(key) * VIEW_COLOR_PALETTE.length) % VIEW_COLOR_PALETTE.length;
  return VIEW_COLOR_PALETTE[index];
}

function valueOrNotSet(value) {
  return String(value || '').trim() || 'Not set';
}

function getDirectReportCount(nodeId) {
  return state.manualLinks.filter((link) => link.from === nodeId).length;
}

function getReportCount(nodeId) {
  const adjacency = new Map();
  state.manualLinks.forEach((link) => {
    if (!adjacency.has(link.from)) {
      adjacency.set(link.from, []);
    }
    adjacency.get(link.from).push(link.to);
  });

  const seen = new Set();
  const stack = [...(adjacency.get(nodeId) || [])];
  while (stack.length) {
    const current = stack.pop();
    if (!current || seen.has(current)) {
      continue;
    }
    seen.add(current);
    (adjacency.get(current) || []).forEach((childId) => stack.push(childId));
  }
  return seen.size;
}

function cleanupCanvasLayout() {
  if (!state.rows.length) {
    notify('Add cards to the canvas before cleaning up the layout.');
    return;
  }
  pushCanvasHistory();
  const layouts = rowLayouts();
  state.rows = state.rows
    .map((row) => row.slice().sort((a, b) => {
      const ax = layouts[a]?.xCenter ?? 0;
      const bx = layouts[b]?.xCenter ?? 0;
      return ax - bx;
    }))
    .filter((row) => row.length > 0);
  compactRows();
  render();
  requestAnimationFrame(() => fitCanvasToContent(rowLayouts(), true));
  scheduleStatePersistence();
  notify('Canvas layout cleaned up.');
}

function closeExportMenu() {
  dom.exportMenu?.classList.add('is-hidden');
  dom.exportChartBtn?.setAttribute('aria-expanded', 'false');
}

function openExportMenu() {
  if (!dom.exportMenu) {
    return;
  }
  dom.exportMenu.classList.remove('is-hidden');
  dom.exportChartBtn?.setAttribute('aria-expanded', 'true');
}

function toggleExportMenu() {
  if (!dom.exportMenu) {
    return;
  }
  if (dom.exportMenu.classList.contains('is-hidden')) {
    openExportMenu();
  } else {
    closeExportMenu();
  }
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function normalizeBudgetValue(member) {
  const raw = String(member.budget || '').trim();
  if (raw) {
    return raw;
  }
  if (member.salary) {
    return member.salary;
  }
  return 'Not set';
}

function memberOrgViewValue(member, nodeId, mode = state.settings.orgChartColorBy) {
  if (mode === 'department') return valueOrNotSet(member.department);
  if (mode === 'position') return valueOrNotSet(member.title);
  if (mode === 'location') return valueOrNotSet(member.location);
  if (mode === 'employmentType') return valueOrNotSet(member.employmentType || member.employmentStatus);
  if (mode === 'performance') return valueOrNotSet(member.performance || member.potential);
  if (mode === 'diversityGroup') return valueOrNotSet(member.diversityGroup);
  if (mode === 'budget') return normalizeBudgetValue(member);
  if (mode === 'span') return `${getDirectReportCount(nodeId)} reports`;
  return '';
}

function orgViewBadges(member, nodeId) {
  const view = state.settings.orgChartView || 'standard';
  const badges = [];

  if (view === 'directory') {
    if (member.email) badges.push(`Email: ${member.email}`);
    if (member.telephone || member.phone) badges.push(`Phone: ${member.telephone || member.phone}`);
    if (member.location) badges.push(`Location: ${member.location}`);
  } else if (view === 'nine-box') {
    badges.push(`Performance: ${valueOrNotSet(member.performance)}`);
    badges.push(`Potential: ${valueOrNotSet(member.potential)}`);
  } else if (view === 'span') {
    badges.push(`Direct reports: ${getDirectReportCount(nodeId)}`);
  } else if (view === 'employment') {
    badges.push(`Type: ${valueOrNotSet(member.employmentType)}`);
    badges.push(`Status: ${valueOrNotSet(member.employmentStatus)}`);
  } else if (view === 'dei') {
    badges.push(`DEI group: ${valueOrNotSet(member.diversityGroup)}`);
  } else if (view === 'hybrid') {
    badges.push(`Location: ${valueOrNotSet(member.location)}`);
    badges.push(`Status: ${valueOrNotSet(member.employmentStatus)}`);
  } else if (view === 'budget') {
    badges.push(`Budget: ${normalizeBudgetValue(member)}`);
    if (member.salary) badges.push(`Salary: ${member.salary}`);
  } else if (view === 'matrix') {
    badges.push(`Manager: ${valueOrNotSet(member.manager)}`);
    badges.push(`Team: ${valueOrNotSet(member.department)}`);
  } else if (view === 'branded') {
    badges.push(valueOrNotSet(member.department));
  }

  const colorByValue = memberOrgViewValue(member, nodeId);
  if (state.settings.orgChartColorBy !== 'none' && colorByValue && !badges.includes(colorByValue)) {
    badges.unshift(colorByValue);
  }
  return badges.filter(Boolean).slice(0, 4);
}

function cardTemplate(member, xCenter, nodeId) {
  const isRight = xCenter > 640;
  const avatarStyle = state.settings.avatarStyle || 'default';
  const showAvatar = state.settings.employeePhotos !== false && avatarStyle !== 'hidden';
  const layout = state.settings.cardLayout;
  const compact = layout === 'compact';
  const widthScale = getCardWidthScaleFactor();
  const heightScale = getCardHeightScaleFactor();
  const textScale = getCardTextScaleFactor();
  const scaledW = (value, min = 0) => Math.max(min, Math.round(value * widthScale));
  const scaledH = (value, min = 0) => Math.max(min, Math.round(value * heightScale));
  const scaledT = (value, min = 0) => Math.max(min, Math.round(value * textScale));

  const avatarRadiusMap = {
    default: '12px',
    circle: '50%',
    square: '4px',
    rounded: '12px',
    hidden: '0'
  };
  const avatarRadius = avatarRadiusMap[avatarStyle] || avatarRadiusMap.default;
  const avatarSize = scaledT(compact ? 56 : 78, 28);
  const avatarFilter =
    avatarStyle === 'monochrome'
      ? 'grayscale(1) contrast(1.05)'
      : avatarStyle === 'duotone'
        ? 'grayscale(1) sepia(0.75) hue-rotate(185deg) saturate(1.55)'
        : 'none';
  const avatarExtraStyle = [
    `border-radius:${avatarRadius}`,
    avatarFilter !== 'none' ? `filter:${avatarFilter}` : '',
    avatarStyle === 'cutout' ? 'mix-blend-mode:multiply' : '',
    avatarStyle === 'floating' ? 'box-shadow:0 10px 22px rgba(12,22,34,0.3);transform:translateY(-3px)' : ''
  ]
    .filter(Boolean)
    .join(';');

  const fields = state.settings.employeeFields || {};
  const showName = fields.name !== false;
  const showRole = fields.title !== false;
  const showDept = fields.department === true;
  const extraFields = [
    fields.telephone && (member.telephone || member.phone) ? member.telephone || member.phone : '',
    fields.email && member.email ? member.email : '',
    fields.address && member.address ? member.address : '',
    fields.location && member.location ? member.location : ''
  ].filter(Boolean);
  const viewBadges = state.settings.showOrgChartBadges === false ? [] : orgViewBadges(member, nodeId);
  const reportCount = getReportCount(nodeId);

  const copyBlock = `
    <div class="card-copy" style="text-align:${layout === 'avatar-top' ? 'center' : isRight && state.settings.cardStyle === 'pill' ? 'right' : 'left'};">
      ${state.settings.showReportCountBadge ? `<div class="canvas-card-report-badge" aria-label="${reportCount} reports">${reportCount}</div>` : ''}
      ${showName ? `<div class="card-name">${escapeHtml(member.name)}</div>` : ''}
      ${showRole ? `<div class="card-title">${escapeHtml(member.title)}</div>` : ''}
      ${showDept ? `<div class="card-department">${escapeHtml(member.department || '')}</div>` : ''}
      ${fields.email && member.email ? `<div class="card-email">${escapeHtml(member.email)}</div>` : ''}
      ${fields.location && member.location ? `<div class="card-location">${escapeHtml(member.location)}</div>` : ''}
      ${fields.telephone && (member.telephone || member.phone) ? `<div class="card-phone">${escapeHtml(member.telephone || member.phone)}</div>` : ''}
      ${fields.address && member.address ? `<div class="card-address">${escapeHtml(member.address)}</div>` : ''}
      ${viewBadges.length ? `<div class="card-view-badges">${viewBadges.map((value) => `<span class="card-view-badge">${escapeHtml(value)}</span>`).join('')}</div>` : ''}
    </div>
  `;

  if (avatarStyle === 'full-bleed' && showAvatar) {
    return `
      <div class="card-main full-bleed" style="position:relative;display:block;">
        <img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="${avatarExtraStyle}" />
        ${copyBlock}
      </div>
    `;
  }

  if (layout === 'avatar-top') {
    return `
      <div class="card-accent"></div>
      <div class="card-main" style="grid-template-columns:1fr;justify-items:center;gap:${scaledT(compact ? 6 : 10, 3)}px;padding:${scaledT(compact ? 10 : 12, 5)}px;">
        ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${avatarSize}px;height:${avatarSize}px;${avatarExtraStyle};" />` : ''}
        ${copyBlock}
      </div>
    `;
  }

  if (state.settings.cardStyle === 'pill') {
    return `
      <div class="card-main" style="grid-template-columns:${showAvatar ? (isRight ? `1fr ${scaledW(compact ? 64 : 88, 30)}px` : `${scaledW(compact ? 64 : 88, 30)}px 1fr`) : '1fr'};padding:${scaledH(10, 5)}px ${scaledW(isRight ? 12 : 14, 6)}px ${scaledH(10, 5)}px ${scaledW(isRight ? 14 : 12, 6)}px;gap:${scaledW(compact ? 10 : 14, 5)}px;">
        ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${scaledT(compact ? 64 : 86, 30)}px;height:${scaledT(compact ? 64 : 86, 30)}px;${avatarExtraStyle};order:${isRight ? '2' : '0'};border:${Math.max(1, scaledT(3, 1))}px solid #f2dce0;" />` : ''}
        ${copyBlock}
      </div>
    `;
  }

  return `
    <div class="card-accent"></div>
    <div class="card-main" style="grid-template-columns:${showAvatar ? `${scaledW(compact ? 58 : 78, 28)}px 1fr` : '1fr'};gap:${scaledW(compact ? 10 : 14, 5)}px;padding:${scaledH(compact ? 10 : 12, 5)}px ${scaledW(compact ? 10 : 12, 5)}px;">
      ${showAvatar ? `<img class="card-photo" src="${member.photo}" alt="${escapeHtml(member.name)}" style="width:${scaledT(compact ? 58 : 78, 28)}px;height:${scaledT(compact ? 58 : 64, 28)}px;${avatarExtraStyle};" />` : ''}
      ${copyBlock}
    </div>
  `;
}

function rowLayouts() {
  const layouts = {};
  const cardSize = currentCardSize();
  const metrics = getBodyMetrics();
  const actualRowCount = state.rows.length;
  const targetRowCount = getTargetRowCount(actualRowCount);

  state.rows.forEach((row, rowIndex) => {
    const displayRowIndex = mapRowToDisplayIndex(rowIndex, actualRowCount, targetRowCount);

    if (isHorizontalHierarchy()) {
      const xCenter =
        targetRowCount <= 1
          ? (metrics.left + metrics.right) / 2
          : metrics.left + ((metrics.right - metrics.left) / (targetRowCount - 1)) * displayRowIndex;
      const directionalXCenter =
        state.settings.hierarchyDirection === 'right-left' ? metrics.left + metrics.right - xCenter : xCenter;
      const yCenters =
        row.length <= 1
          ? [(metrics.top + metrics.bottom) / 2]
          : Array.from({ length: row.length }, (_, index) => metrics.top + ((metrics.bottom - metrics.top) / (row.length - 1)) * index);
      row.forEach((nodeId, columnIndex) => {
        layouts[nodeId] = {
          xCenter: directionalXCenter,
          yCenter: yCenters[columnIndex],
          x: directionalXCenter - cardSize.width / 2,
          y: yCenters[columnIndex] - cardSize.height / 2,
          width: cardSize.width,
          height: cardSize.height,
          rowIndex,
          columnIndex
        };
      });
      return;
    }

    const yCenter = computeRowYFromDirection(displayRowIndex, targetRowCount);
    const xCenters = computeRowCenters(row.length);
    row.forEach((nodeId, columnIndex) => {
      layouts[nodeId] = {
        xCenter: xCenters[columnIndex],
        yCenter,
        x: xCenters[columnIndex] - cardSize.width / 2,
        y: yCenter - cardSize.height / 2,
        width: cardSize.width,
        height: cardSize.height,
        rowIndex,
        columnIndex
      };
    });
  });

  const mode = state.settings.layoutMode || 'strict';
  const organicAmount = clamp(Number(state.settings.formalOrganic || 0) / 100, 0, 1);
  const dynamicAmount = clamp(Number(state.settings.symmetryDynamic || 0) / 100, 0, 1);
  const freeformAmount = clamp(Number(state.settings.structureFreeform || 0) / 100, 0, 1);
  const centerX = (metrics.left + metrics.right) / 2;
  const centerY = (metrics.top + metrics.bottom) / 2;
  const rowCount = Math.max(1, state.rows.length);

  Object.entries(layouts).forEach(([nodeId, layout]) => {
    const rowProgress = rowCount <= 1 ? 0 : layout.rowIndex / (rowCount - 1);
    if (mode === 'editorial') {
      const stagger = layout.rowIndex % 2 === 0 ? -70 : 70;
      layout.x += stagger * dynamicAmount * 0.9;
      layout.xCenter += stagger * dynamicAmount * 0.9;
    } else if (mode === 'clustered') {
      const clusterSlots = [0.2, 0.5, 0.8];
      const slot = clusterSlots[(layout.columnIndex || 0) % clusterSlots.length];
      const targetX = lerp(metrics.left, metrics.right, slot);
      layout.xCenter = lerp(layout.xCenter, targetX, 0.48);
      layout.x = layout.xCenter - layout.width / 2;
    } else if (mode === 'masonry') {
      const lift = (layout.columnIndex % 2 === 0 ? -1 : 1) * (10 + dynamicAmount * 18);
      layout.y += lift;
      layout.yCenter += lift;
    } else if (mode === 'organic' || mode === 'physics') {
      const jitterX = (hashToUnit(`${nodeId}-x`) - 0.5) * 90 * organicAmount;
      const jitterY = (hashToUnit(`${nodeId}-y`) - 0.5) * 70 * (organicAmount * 0.85 + freeformAmount * 0.2);
      layout.x += jitterX;
      layout.y += jitterY;
      layout.xCenter += jitterX;
      layout.yCenter += jitterY;
    } else if (mode === 'radial') {
      const row = layout.rowIndex;
      const rowSize = Math.max(1, state.rows[row]?.length || 1);
      const start = -Math.PI / 2;
      const sweep = Math.PI * 1.7;
      const angle = rowSize <= 1 ? start : start + (sweep * layout.columnIndex) / Math.max(1, rowSize - 1);
      const ringRadius = 90 + row * 118;
      layout.xCenter = centerX + Math.cos(angle) * ringRadius;
      layout.yCenter = centerY + Math.sin(angle) * (ringRadius * 0.66);
      layout.x = layout.xCenter - layout.width / 2;
      layout.y = layout.yCenter - layout.height / 2;
    } else if (mode === 'hexagonal') {
      const row = layout.rowIndex;
      const offset = row % 2 === 0 ? -44 : 44;
      layout.x += offset;
      layout.xCenter += offset;
      layout.y += (layout.columnIndex % 2 === 0 ? -10 : 10) * (0.35 + dynamicAmount * 0.65);
      layout.yCenter = layout.y + layout.height / 2;
    } else if (mode === 'swimlane') {
      const laneCount = Math.max(1, state.rows.length);
      const laneHeight = (metrics.bottom - metrics.top) / laneCount;
      const laneY = metrics.top + laneHeight * layout.rowIndex + laneHeight / 2;
      layout.yCenter = laneY;
      layout.y = laneY - layout.height / 2;
      const margin = 80 + dynamicAmount * 40;
      if ((layout.columnIndex || 0) === 0) {
        layout.xCenter = metrics.left + margin;
      } else if ((state.rows[layout.rowIndex]?.length || 1) - 1 === layout.columnIndex) {
        layout.xCenter = metrics.right - margin;
      }
      layout.x = layout.xCenter - layout.width / 2;
    }

    if (mode === 'symmetrical') {
      const distFromCenter = layout.xCenter - centerX;
      layout.xCenter = centerX + distFromCenter * (1 - dynamicAmount * 0.22);
      layout.x = layout.xCenter - layout.width / 2;
    }

    const freeShift = (hashToUnit(`${nodeId}-free`) - 0.5) * 34 * freeformAmount * 0.6;
    if (mode !== 'strict' && mode !== 'symmetrical') {
      layout.x += freeShift;
      layout.xCenter += freeShift;
    }

    const node = state.nodes[nodeId];
    if (node?.manualPosition && Number.isFinite(Number(node.xCenter)) && Number.isFinite(Number(node.yCenter))) {
      layout.xCenter = Number(node.xCenter);
      layout.yCenter = Number(node.yCenter);
      layout.x = layout.xCenter - layout.width / 2;
      layout.y = layout.yCenter - layout.height / 2;
    }

    const boardSize = canvasBaseSize();
    const boardWidth = Math.max(boardSize.width || 0, dom.cardLayer.clientWidth || 1280);
    const boardHeight = Math.max(boardSize.height || 0, dom.cardLayer.clientHeight || 560);
    layout.x = clamp(layout.x, 8, boardWidth - layout.width - 8);
    layout.y = clamp(layout.y, 8, boardHeight - layout.height - 8);
    layout.xCenter = layout.x + layout.width / 2;
    layout.yCenter = layout.y + layout.height / 2;

    if (node?.manualPosition) {
      node.xCenter = layout.xCenter;
      node.yCenter = layout.yCenter;
    }
  });

  return layouts;
}

function applyCardShapePreset(shape) {
  const presets = {
    square: { cardWidthScale: 100, cardHeightScale: 100, cardRadius: 0, cardShape: 'square' },
    rectangle: { cardWidthScale: 132, cardHeightScale: 96, cardRadius: 8, cardShape: 'rectangle' },
    'tall-badge': { cardWidthScale: 84, cardHeightScale: 140, cardRadius: 18, cardShape: 'tall-badge' },
    circle: { cardWidthScale: 100, cardHeightScale: 100, cardRadius: 50, cardShape: 'circle' }
  };
  return presets[shape] || presets.rectangle;
}

function normalizeCardShapeName(shape) {
  const aliases = {
    rounded: 'rectangle',
    soft: 'tall-badge',
    pill: 'circle'
  };
  const normalized = String(shape || '').trim();
  return aliases[normalized] || normalized || 'rectangle';
}

function getCardRadiusFromShape() {
  return applyCardShapePreset(normalizeCardShapeName(state.settings.cardShape || 'rectangle')).cardRadius;
}

function getCardShadowFromElevation() {
  const intensity = clamp((Number(state.settings.shadowIntensity) || 100) / 100, 0, 2.2);
  const scale = (value) => Math.round(value * intensity);

  if (state.settings.cardElevation === 'flat') {
    return 'none';
  }
  if (state.settings.cardElevation === 'floating') {
    return `0 ${scale(18)}px ${scale(34)}px rgba(18, 32, 50, ${0.24 * Math.max(0.3, intensity)})`;
  }
  if (state.settings.cardElevation === 'glass') {
    return `0 ${scale(12)}px ${scale(24)}px rgba(18, 32, 50, ${0.2 * Math.max(0.3, intensity)}), inset 0 1px 0 rgba(255,255,255,0.72)`;
  }
  return state.settings.showShadow
    ? `0 ${scale(9)}px ${scale(20)}px rgba(23, 36, 53, ${0.09 * Math.max(0.3, intensity)})`
    : 'none';
}

function hexToRgba(hex, alpha = 1) {
  const normalized = String(hex || '').replace('#', '').trim();
  if (!/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(normalized)) {
    return `rgba(63, 113, 196, ${alpha})`;
  }
  const full = normalized.length === 3
    ? normalized.split('').map((char) => `${char}${char}`).join('')
    : normalized;
  const value = Number.parseInt(full, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function cardFillAppearance() {
  const pattern = state.settings.cardFillPattern || 'none';
  const fill = state.settings.cardBg || '#ffffff';
  const accent = hexToRgba(state.settings.accentColor, 0.18);
  const strongerAccent = hexToRgba(state.settings.accentColor, 0.28);

  if (pattern === 'subtle-grid') {
    return {
      background: `repeating-linear-gradient(0deg, ${accent} 0 1px, transparent 1px 12px), repeating-linear-gradient(90deg, ${accent} 0 1px, transparent 1px 12px), ${fill}`,
      backgroundSize: '12px 12px'
    };
  }
  if (pattern === 'diagonal') {
    return {
      background: `repeating-linear-gradient(135deg, ${accent} 0 2px, transparent 2px 12px), ${fill}`,
      backgroundSize: '16px 16px'
    };
  }
  if (pattern === 'crosshatch') {
    return {
      background: `repeating-linear-gradient(45deg, ${accent} 0 1px, transparent 1px 10px), repeating-linear-gradient(135deg, ${accent} 0 1px, transparent 1px 10px), ${fill}`,
      backgroundSize: '14px 14px'
    };
  }
  if (pattern === 'dots') {
    return {
      background: `radial-gradient(${strongerAccent} 1.4px, transparent 1.6px), ${fill}`,
      backgroundSize: '12px 12px'
    };
  }
  if (pattern === 'blueprint') {
    return {
      background: `repeating-linear-gradient(0deg, ${accent} 0 1px, transparent 1px 10px), repeating-linear-gradient(90deg, ${accent} 0 1px, transparent 1px 10px), linear-gradient(180deg, ${fill}, ${hexToRgba(state.settings.accentColor, 0.08)})`,
      backgroundSize: '10px 10px'
    };
  }
  return { background: fill, backgroundSize: 'auto' };
}

function getCardBorderStyle() {
  const width = clamp(Number(state.settings.outlineWidth) || 0, 0, 8);
  const lineStyle = state.settings.cardLineStyle || 'solid';
  if (!state.settings.showOutline || width <= 0 || lineStyle === 'none') {
    return '0 solid transparent';
  }
  const cssStyle = lineStyle === 'double' ? 'double' : lineStyle;
  const cssWidth = lineStyle === 'double' ? Math.max(3, width) : width;
  return `${cssWidth}px ${cssStyle} ${state.settings.outlineColor}`;
}

function cardVisualStyles() {
  const type = state.settings.cardVisualType || 'standard';
  const accent = state.settings.accentColor;
  const baseBg = state.settings.cardBg;
  const blur = clamp(Number(state.settings.blurStrength || 10), 0, 24);

  if (type === 'glass') {
    return { background: 'rgba(255,255,255,0.55)', backdrop: `blur(${blur}px) saturate(132%)`, border: `1px solid rgba(255,255,255,0.7)` };
  }
  if (type === 'elevated') {
    return { extraClass: 'card-visual-elevated' };
  }
  if (type === 'minimal') {
    return { background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(209,220,232,0.6)', accentHeight: 3 };
  }
  if (type === 'outline') {
    return { background: 'rgba(255,255,255,0.08)', border: `2px solid ${accent}` };
  }
  if (type === 'filled') {
    return { background: accent, text: '#ffffff', subText: 'rgba(255,255,255,0.9)', accentHeight: 0 };
  }
  if (type === 'split') {
    return { background: `linear-gradient(90deg, ${accent} 0%, ${accent} 32%, ${baseBg} 32%, ${baseBg} 100%)` };
  }
  if (type === 'stack') {
    return { extraClass: 'card-visual-stack' };
  }
  if (type === 'frosted') {
    return { background: 'rgba(248, 252, 255, 0.46)', backdrop: `blur(${Math.max(8, blur)}px) saturate(160%)`, border: '1px solid rgba(255,255,255,0.8)' };
  }
  if (type === 'gradient') {
    return { background: `linear-gradient(130deg, ${accent}18, ${baseBg} 38%, ${accent}2E)` };
  }
  if (type === 'blueprint') {
    return { background: 'linear-gradient(#e2efff,#e2efff), repeating-linear-gradient(0deg, rgba(30,92,167,0.12), rgba(30,92,167,0.12) 1px, transparent 1px, transparent 12px)', border: '1px solid rgba(50,102,164,0.34)' };
  }
  if (type === 'editorial') {
    return { border: '2px solid #202937', accentHeight: 2 };
  }
  return {};
}

function animationTimings() {
  const speed = state.settings.animationSpeed;
  if (speed === 'fast') {
    return { cardDuration: 320, connectorDuration: 520, stepDelay: 40 };
  }
  if (speed === 'slow') {
    return { cardDuration: 860, connectorDuration: 1350, stepDelay: 130 };
  }
  return { cardDuration: 560, connectorDuration: 900, stepDelay: 80 };
}

function cardAnimationClass() {
  const style = state.settings.cardEntranceAnimation;
  if (style === 'cascade') {
    return 'anim-card-cascade';
  }
  if (style === 'tree-grow') {
    return 'anim-card-tree';
  }
  if (style === 'fade') {
    return 'anim-card-fade';
  }
  if (style === 'slide') {
    return 'anim-card-slide';
  }
  if (style === 'pop') {
    return 'anim-card-pop';
  }
  return '';
}

function connectorAnimationClass() {
  const style = state.settings.connectorAnimation;
  if (style === 'draw') {
    return 'anim-connector-draw';
  }
  if (style === 'fade') {
    return 'anim-connector-fade';
  }
  if (style === 'flow') {
    return 'anim-connector-flow';
  }
  return '';
}

function cardAnimationDelay(layout, timings) {
  const rowIndex = layout.rowIndex || 0;
  const columnIndex = layout.columnIndex || 0;
  if (state.settings.cardEntranceAnimation === 'cascade') {
    return (rowIndex * 3 + columnIndex) * timings.stepDelay;
  }
  if (state.settings.cardEntranceAnimation === 'tree-grow') {
    return rowIndex * Math.round(timings.stepDelay * 1.35);
  }
  if (state.settings.cardEntranceAnimation === 'slide') {
    return (rowIndex + columnIndex) * Math.round(timings.stepDelay * 0.72);
  }
  if (state.settings.cardEntranceAnimation === 'fade') {
    return (rowIndex + columnIndex) * Math.round(timings.stepDelay * 0.45);
  }
  return 0;
}

function renderCards(layouts) {
  const cardBorder = getCardBorderStyle();
  const cardShadow = getCardShadowFromElevation();
  const cardRadius = getCardRadiusFromShape();
  const fillAppearance = cardFillAppearance();
  const textScale = getCardTextScaleFactor();
  const blurStrength = clamp(Number(state.settings.blurStrength || 10), 0, 24);
  const timings = animationTimings();
  const entranceClass = hasRenderedCanvasOnce ? '' : cardAnimationClass();
  const floatingClass = '';

  dom.cardLayer.innerHTML = Object.entries(layouts)
    .map(([nodeId, layout]) => {
      const node = state.nodes[nodeId];
      const member = getMemberById(node.memberId);
      if (!member) {
        return '';
      }

      const selectedClass = state.selectedCardId === nodeId ? 'selected' : '';
      const visual = cardVisualStyles();
      const colorByValue = memberOrgViewValue(member, nodeId);
      const viewColor = state.settings.orgChartColorBy && state.settings.orgChartColorBy !== 'none'
        ? colorFromValue(colorByValue)
        : state.settings.accentColor;
      const viewBorder = state.settings.orgChartColorBy && state.settings.orgChartColorBy !== 'none'
        ? `${Math.max(2, Number(state.settings.outlineWidth) || 1)}px ${state.settings.cardLineStyle === 'none' ? 'solid' : state.settings.cardLineStyle || 'solid'} ${viewColor}`
        : cardBorder;
      const animationClass = entranceClass ? ` ${entranceClass}` : '';
      const animationDelay = cardAnimationDelay(layout, timings);
      const style = [
        `left:${layout.x}px`,
        `top:${layout.y}px`,
        `width:${layout.width}px`,
        `height:${layout.height}px`,
        `border:${visual.border || viewBorder}`,
        `box-shadow:${cardShadow}`,
        `border-radius:${cardRadius}%`,
        `font-family:${state.settings.cardFont || state.settings.headingFont || 'Manrope'}, sans-serif`,
        `--enter-duration:${timings.cardDuration}ms`,
        `--enter-delay:${animationDelay}ms`,
        `background:${visual.background || fillAppearance.background}`,
        !visual.background && fillAppearance.backgroundSize ? `background-size:${fillAppearance.backgroundSize}` : '',
        visual.backdrop ? `backdrop-filter:${visual.backdrop}` : '',
        state.settings.cardElevation === 'glass' && !visual.backdrop ? `backdrop-filter: blur(${blurStrength}px) saturate(125%)` : '',
        state.settings.cardElevation === 'glass' && !visual.background ? 'background: rgba(255,255,255,0.58)' : '',
        visual.accentHeight !== undefined ? `--card-accent-h:${visual.accentHeight}px` : '',
        `--card-view-color:${viewColor}`,
        `--card-name-color:${state.settings.cardTextColor}`,
        `--card-role-color:${state.settings.cardSubColor}`
      ].join(';');

      return `
        <article class="canvas-card ${selectedClass}${animationClass}${floatingClass}${visual.extraClass ? ` ${visual.extraClass}` : ''}" data-node-id="${nodeId}" data-card-visual="${state.settings.cardVisualType || 'standard'}" data-org-view="${state.settings.orgChartView || 'standard'}" style="${style}">
          <button class="canvas-card-remove-btn" type="button" data-remove-node-id="${nodeId}" aria-label="Remove ${escapeHtml(member.name)} from canvas">X</button>
          ${cardTemplate(member, layout.xCenter, nodeId)}
        </article>
      `;
    })
    .join('');

  dom.cardLayer.querySelectorAll('.canvas-card').forEach((cardElement) => {
    const nodeId = cardElement.dataset.nodeId;

    cardElement.addEventListener('click', () => {
      onCardClick(nodeId);
    });

    cardElement.addEventListener('pointerdown', (event) => {
      startCardDrag(event, nodeId);
    });
  });

  dom.cardLayer.querySelectorAll('.canvas-card-remove-btn').forEach((button) => {
    button.addEventListener('pointerdown', (event) => {
      event.stopPropagation();
    });
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const nodeId = button.dataset.removeNodeId;
      if (nodeId) {
        removeCanvasNode(nodeId);
      }
    });
  });

  dom.cardLayer.querySelectorAll('.card-name').forEach((element) => {
    const color = getComputedStyle(element.closest('.canvas-card')).getPropertyValue('--card-name-color').trim() || state.settings.cardTextColor;
    element.style.fontSize = `${Math.max(9, Math.round(state.settings.nameSize * textScale))}px`;
    element.style.fontWeight = String(Number(state.settings.nameWeight) || 400);
    element.style.color = color;
    element.style.lineHeight = String(state.settings.nameLineHeight || 1.12);
    element.style.letterSpacing = `${Number(state.settings.nameTracking || 0).toFixed(2)}em`;
  });

  dom.cardLayer.querySelectorAll('.card-role').forEach((element) => {
    const color = getComputedStyle(element.closest('.canvas-card')).getPropertyValue('--card-role-color').trim() || state.settings.cardSubColor;
    element.style.fontSize = `${Math.max(8, Math.round(state.settings.roleSize * textScale))}px`;
    element.style.color = color;
    element.style.fontWeight = String(state.settings.roleWeight || 400);
    element.style.lineHeight = String(state.settings.roleLineHeight || 1.15);
    element.style.letterSpacing = `${Number(state.settings.roleTracking || 0).toFixed(2)}em`;
  });

  const fieldTypography = [
    ['.card-title', {
      font: state.settings.headingFont || 'Arial',
      size: Math.max(10, Math.round(state.settings.headingSize * textScale * 0.34)),
      weight: Number(state.settings.headingWeight) || 400,
      lineHeight: state.settings.headingLineHeight || 1.02,
      tracking: state.settings.headingTracking || 0,
      color: state.settings.headingColor
    }],
    ['.card-department', {
      font: state.settings.departmentFont || state.settings.cardFont || 'Arial',
      size: Math.max(8, Math.round(state.settings.departmentSize * textScale)),
      weight: Number(state.settings.departmentWeight) || 400,
      lineHeight: state.settings.departmentLineHeight || 1.12,
      tracking: 0,
      color: state.settings.departmentColor || state.settings.cardSubColor
    }],
    ['.card-email', {
      font: state.settings.emailFont || state.settings.cardFont || 'Arial',
      size: Math.max(8, Math.round(state.settings.emailSize * textScale)),
      weight: Number(state.settings.emailWeight) || 400,
      lineHeight: state.settings.emailLineHeight || 1.12,
      tracking: 0,
      color: state.settings.emailColor || state.settings.cardSubColor
    }],
    ['.card-location', {
      font: state.settings.locationFont || state.settings.cardFont || 'Arial',
      size: Math.max(8, Math.round(state.settings.locationSize * textScale)),
      weight: Number(state.settings.locationWeight) || 400,
      lineHeight: state.settings.locationLineHeight || 1.12,
      tracking: 0,
      color: state.settings.locationColor || state.settings.cardSubColor
    }],
    ['.card-phone', {
      font: state.settings.cardFont || state.settings.headingFont || 'Arial',
      size: Math.max(8, Math.round(state.settings.emailSize * textScale)),
      weight: Number(state.settings.emailWeight) || 400,
      lineHeight: state.settings.emailLineHeight || 1.12,
      tracking: 0,
      color: state.settings.cardSubColor
    }],
    ['.card-address', {
      font: state.settings.cardFont || state.settings.headingFont || 'Arial',
      size: Math.max(8, Math.round(state.settings.emailSize * textScale)),
      weight: Number(state.settings.emailWeight) || 400,
      lineHeight: state.settings.emailLineHeight || 1.12,
      tracking: 0,
      color: state.settings.cardSubColor
    }]
  ];

  fieldTypography.forEach(([selector, spec]) => {
    dom.cardLayer.querySelectorAll(selector).forEach((element) => {
      element.style.fontFamily = `${spec.font}, sans-serif`;
      element.style.fontSize = `${spec.size}px`;
      element.style.fontWeight = String(spec.weight);
      element.style.color = spec.color;
      element.style.lineHeight = String(spec.lineHeight);
      element.style.letterSpacing = `${Number(spec.tracking || 0).toFixed(2)}em`;
    });
  });

  dom.cardLayer.querySelectorAll('.card-accent').forEach((element) => {
    const visual = element.closest('.canvas-card')?.dataset.cardVisual;
    if (visual === 'filled' || visual === 'full-bleed') {
      element.style.display = 'none';
      return;
    }
    element.style.display = 'block';
    element.style.background = getComputedStyle(element.closest('.canvas-card')).getPropertyValue('--card-view-color').trim() || state.settings.accentColor;
    element.style.height = `var(--card-accent-h, 6px)`;
  });
}

function toggleManualLink(fromNodeId, toNodeId) {
  const foundIndex = state.manualLinks.findIndex(
    (link) =>
      (link.from === fromNodeId && link.to === toNodeId) ||
      (link.from === toNodeId && link.to === fromNodeId)
  );

  if (foundIndex >= 0) {
    state.manualLinks.splice(foundIndex, 1);
    notify('Manual connector removed.');
  } else {
    state.manualLinks.push({ from: fromNodeId, to: toNodeId });
    notify('Manual connector added.');
  }
}

function createDragGhost(card, event) {
  if (!card) {
    return null;
  }
  const rect = card.getBoundingClientRect();
  const ghost = card.cloneNode(true);
  ghost.classList.remove('dragging', 'connect-target');
  ghost.classList.add('drag-card-ghost');
  ghost.removeAttribute('data-node-id');
  ghost.style.width = `${rect.width}px`;
  ghost.style.height = `${rect.height}px`;
  ghost.style.left = `${rect.left}px`;
  ghost.style.top = `${rect.top}px`;
  document.body.appendChild(ghost);
  return {
    element: ghost,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top
  };
}

function moveDragGhost(ghost, clientX, clientY) {
  if (!ghost?.element) {
    return;
  }
  ghost.element.style.left = `${clientX - ghost.offsetX}px`;
  ghost.element.style.top = `${clientY - ghost.offsetY}px`;
}

function removeDragGhost(ghost) {
  ghost?.element?.remove();
}

function onCardClick(nodeId) {
  const memberId = state.nodes[nodeId]?.memberId || null;
  if (state.selectedCardId === null) {
    state.selectedCardId = nodeId;
    state.selectedMemberId = memberId;
    notify('Select another card to connect, or click this card again to cancel.');
    render();
    return;
  }

  if (state.selectedCardId === nodeId) {
    state.selectedCardId = null;
    state.selectedMemberId = null;
    notify('Card selection canceled.');
    render();
    return;
  }

  pushCanvasHistory();
  toggleManualLink(state.selectedCardId, nodeId);
  state.selectedCardId = null;
  state.selectedMemberId = null;
  render();
}

function getElevationPresetLabel(value) {
  const index = Math.max(0, Math.min(3, Number(value) || 0));
  return ['Flat', 'Soft Shadow', 'Floating', 'Glass'][index];
}

function getElevationPresetValue(value) {
  const index = Math.max(0, Math.min(3, Number(value) || 0));
  return ['flat', 'soft', 'floating', 'glass'][index];
}

function getElevationSliderValue(value) {
  const map = { flat: 0, soft: 1, floating: 2, glass: 3 };
  return map[value] ?? 1;
}

function getConnectorAnchors(fromLayout, toLayout) {
  const anchorInset = 2;

  if (isHorizontalHierarchy()) {
    const fromIsLeading = state.settings.hierarchyDirection === 'left-right'
      ? fromLayout.xCenter <= toLayout.xCenter
      : fromLayout.xCenter >= toLayout.xCenter;
    return {
      fromX: fromIsLeading ? fromLayout.x + fromLayout.width - anchorInset : fromLayout.x + anchorInset,
      fromY: fromLayout.y + fromLayout.height / 2,
      toX: fromIsLeading ? toLayout.x + anchorInset : toLayout.x + toLayout.width - anchorInset,
      toY: toLayout.y + toLayout.height / 2
    };
  }

  const targetIsBelow = state.settings.hierarchyDirection !== 'bottom-up';
  return {
    fromX: fromLayout.x + fromLayout.width / 2,
    fromY: targetIsBelow ? fromLayout.y + fromLayout.height - anchorInset : fromLayout.y + anchorInset,
    toX: toLayout.x + toLayout.width / 2,
    toY: targetIsBelow ? toLayout.y + anchorInset : toLayout.y + toLayout.height - anchorInset
  };
}

function pathBetweenCards(fromLayout, toLayout) {
  const { fromX, fromY, toX, toY } = getConnectorAnchors(fromLayout, toLayout);
  const profile = connectorVisualProfile();
  const style = profile.routeHint || state.settings.connectorStyle;

  if (style === 'straight') {
    return `M ${fromX} ${fromY} L ${toX} ${toY}`;
  }

  if (style === 'curved') {
    if (isHorizontalHierarchy()) {
      const midX = fromX + (toX - fromX) * 0.5;
      if ((state.settings.connectorVisualStyle || '') === 'hand-drawn') {
        const bend = (hashToUnit(`${fromX}-${toX}-${fromY}`) - 0.5) * 40;
        return `M ${fromX} ${fromY} C ${midX + bend} ${fromY + bend}, ${midX - bend} ${toY - bend}, ${toX} ${toY}`;
      }
      return `M ${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${toY}, ${toX} ${toY}`;
    }
    const midY = fromY + (toY - fromY) * 0.5;
    if ((state.settings.connectorVisualStyle || '') === 'hand-drawn') {
      const bend = (hashToUnit(`${fromY}-${toY}-${toX}`) - 0.5) * 40;
      return `M ${fromX} ${fromY} C ${fromX + bend} ${midY - bend}, ${toX - bend} ${midY + bend}, ${toX} ${toY}`;
    }
    return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  }

  if (style === 'stepped') {
    if (isHorizontalHierarchy()) {
      const stepX = fromX + (toX - fromX) * 0.35;
      return `M ${fromX} ${fromY} L ${stepX} ${fromY} L ${stepX} ${toY} L ${toX} ${toY}`;
    }
    const stepY = fromY + (toY - fromY) * 0.35;
    return `M ${fromX} ${fromY} L ${fromX} ${stepY} L ${toX} ${stepY} L ${toX} ${toY}`;
  }

  if (isHorizontalHierarchy()) {
    const midX = fromX + (toX - fromX) / 2;
    return `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;
  }
  const midY = fromY + (toY - fromY) / 2;
  return `M ${fromX} ${fromY} L ${fromX} ${midY} L ${toX} ${midY} L ${toX} ${toY}`;
}

function doubleLineOffset(fromLayout, toLayout) {
  const dx = toLayout.xCenter - fromLayout.xCenter;
  const dy = toLayout.yCenter - fromLayout.yCenter;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return { x: 0, y: 3 };
  }
  return { x: 3, y: 0 };
}

function autoLinkPairs(layouts) {
  const links = [];
  for (let rowIndex = 1; rowIndex < state.rows.length; rowIndex += 1) {
    const currentRow = state.rows[rowIndex];
    const parentRow = state.rows[rowIndex - 1];
    currentRow.forEach((childNodeId) => {
      const childLayout = layouts[childNodeId];
      let nearestParent = parentRow[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      parentRow.forEach((parentNodeId) => {
        const parentLayout = layouts[parentNodeId];
        const distance = Math.abs(parentLayout.xCenter - childLayout.xCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestParent = parentNodeId;
        }
      });

      links.push({ from: nearestParent, to: childNodeId });
    });
  }
  return links;
}

function connectorVisualProfile() {
  const visual = state.settings.connectorVisualStyle || 'default';
  if (visual === 'curved') {
    return { linecap: 'round', linejoin: 'round', routeHint: 'curved' };
  }
  if (visual === 'straight') {
    return { linecap: 'round', linejoin: 'round', routeHint: 'straight' };
  }
  return { linecap: 'round', linejoin: 'round' };
}

function connectorThicknessValue() {
  const raw = state.settings.connectorWeight;
  if (typeof raw === 'number' && Number.isFinite(raw)) {
    return clamp(raw, 1, 12);
  }
  const legacyMap = { thin: 2, medium: 4, bold: 7 };
  return legacyMap[String(raw || '').toLowerCase()] || 4;
}

function normalizeConnectorMarker(value) {
  const normalized = String(value || '').toLowerCase();
  if (normalized === 'dot' || normalized === 'arrow' || normalized === 'square' || normalized === 'none') {
    return normalized;
  }
  if (normalized === 'arrowheads') {
    return 'arrow';
  }
  if (normalized === 'dots') {
    return 'dot';
  }
  return 'none';
}

function connectorEndpointPreset(value, fallback = 'none') {
  const normalized = normalizeConnectorMarker(value);
  if (normalized === 'none') {
    return 'none';
  }
  return normalized;
}

function connectorTypePreset(value) {
  const normalized = String(value || '').toLowerCase();
  if (normalized === 'dashed') {
    return { dash: '9 7' };
  }
  if (normalized === 'double') {
    return { double: true };
  }
  if (normalized === 'dotted') {
    return { dash: '1 10' };
  }
  return {};
}

function syncConnectorLayerSize() {
  const layerWidth = dom.cardLayer.clientWidth || 1280;
  const layerHeight = dom.cardLayer.clientHeight || 560;
  dom.connectorLayer.setAttribute('viewBox', `0 0 ${layerWidth} ${layerHeight}`);
  dom.connectorLayer.setAttribute('preserveAspectRatio', 'none');
}

function renderConnectors(layouts) {
  syncConnectorLayerSize();
  const paths = [];
  const decorations = [];
  const strokeWidth = connectorThicknessValue();
  const startMarkerScale = clamp(Number(state.settings.connectorStartMarkerScale || 1), 0.1, 2.4);
  const markerScale = clamp(Number(state.settings.connectorMarkerScale || 1), 0.1, 2.4);
  const timings = animationTimings();
  const connectorClass = connectorAnimationClass();
  const startMarker = connectorEndpointPreset(state.settings.connectorStartPoint, 'none');
  const endMarker = connectorEndpointPreset(state.settings.connectorEndPoint, 'none');
  const typeProfile = connectorTypePreset(state.settings.connectorType);
  const baseDash = typeProfile.dash || '';
  let pathIndex = 0;

  function pushPath(fromLayout, toLayout, stroke, width, opacity = 0.8) {
    const d = pathBetweenCards(fromLayout, toLayout);
    const anchors = getConnectorAnchors(fromLayout, toLayout);
    const midX = (anchors.fromX + anchors.toX) / 2;
    const midY = (anchors.fromY + anchors.toY) / 2;
    const delay = pathIndex * Math.round(timings.stepDelay * 0.75);
    pathIndex += 1;
    const dashValue = connectorClass === 'anim-connector-draw' ? '' : connectorClass === 'anim-connector-flow' ? '14 10' : baseDash;
    const markerStart = startMarker === 'arrow' ? 'url(#connector-arrow-start)' : startMarker === 'dot' ? 'url(#connector-dot-start)' : startMarker === 'square' ? 'url(#connector-square-start)' : '';
    const markerEnd = endMarker === 'arrow' ? 'url(#connector-arrow-end)' : endMarker === 'dot' ? 'url(#connector-dot-end)' : endMarker === 'square' ? 'url(#connector-square-end)' : '';
    const linecap = typeProfile.double ? 'round' : 'round';
    const linejoin = typeProfile.double ? 'round' : 'round';

    if (typeProfile.double) {
      const offset = doubleLineOffset(fromLayout, toLayout);
      paths.push(
        `<path d="${d}" class="connector-line ${connectorClass}" fill="none" stroke="${stroke}" opacity="${opacity * 0.95}" ${dashValue ? `stroke-dasharray="${dashValue}"` : ''} ${offset.x || offset.y ? `transform="translate(${offset.x}, ${offset.y})"` : ''} stroke-linecap="${linecap}" stroke-linejoin="${linejoin}" style="stroke-width:${Math.max(1, width - 1)}px; --connector-duration:${timings.connectorDuration}ms;--connector-delay:${delay}ms;"></path>`
      );
      paths.push(
        `<path d="${d}" class="connector-line ${connectorClass}" fill="none" stroke="${stroke}" opacity="${opacity * 0.95}" ${dashValue ? `stroke-dasharray="${dashValue}"` : ''} ${offset.x || offset.y ? `transform="translate(${-offset.x}, ${-offset.y})"` : ''} stroke-linecap="${linecap}" stroke-linejoin="${linejoin}" style="stroke-width:${Math.max(1, width - 1)}px; --connector-duration:${timings.connectorDuration}ms;--connector-delay:${delay}ms;"></path>`
      );
    }

    paths.push(
      `<path d="${d}" class="connector-line ${connectorClass}" fill="none" stroke="${stroke}" opacity="${opacity}" ${dashValue ? `stroke-dasharray="${dashValue}"` : ''} ${markerStart ? `marker-start="${markerStart}"` : ''} ${markerEnd ? `marker-end="${markerEnd}"` : ''} stroke-linecap="${linecap}" stroke-linejoin="${linejoin}" style="stroke-width:${width}px; --connector-duration:${timings.connectorDuration}ms;--connector-delay:${delay}ms;"></path>`
    );
  }

  if (state.autoConnect) {
    autoLinkPairs(layouts).forEach((link) => {
      const fromLayout = layouts[link.from];
      const toLayout = layouts[link.to];
      if (fromLayout && toLayout) {
        pushPath(fromLayout, toLayout, '#8d949f', strokeWidth, 0.8);
      }
    });
  }

  state.manualLinks.forEach((link) => {
    const fromLayout = layouts[link.from];
    const toLayout = layouts[link.to];
    if (!fromLayout || !toLayout) {
      return;
    }
    const manualStroke = link.stroke || state.settings.connectorEndColor || state.settings.connectorColor || state.settings.accentColor;
    const manualWidth = Math.max(1, strokeWidth + 1 + Number(link.widthOffset || 0));
    pushPath(fromLayout, toLayout, manualStroke, Math.max(manualWidth, 3), 1);
  });

  const arrowWidth = 18;
  const arrowHeight = 14;
  const dotSize = 12;
  const squareSize = 12;
  const startArrowWidth = arrowWidth * startMarkerScale;
  const startArrowHeight = arrowHeight * startMarkerScale;
  const endArrowWidth = arrowWidth * markerScale;
  const endArrowHeight = arrowHeight * markerScale;
  const startDotSize = dotSize * startMarkerScale;
  const endDotSize = dotSize * markerScale;
  const startSquareSize = squareSize * startMarkerScale;
  const endSquareSize = squareSize * markerScale;
  const defs = `<defs>
    <marker id="connector-arrow-start" viewBox="0 0 18 14" markerWidth="${startArrowWidth}" markerHeight="${startArrowHeight}" refX="18" refY="7" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0,0 L18,7 L0,14 z" fill="${state.settings.connectorStartColor || state.settings.connectorColor || state.settings.accentColor}"></path></marker>
    <marker id="connector-arrow-end" viewBox="0 0 18 14" markerWidth="${endArrowWidth}" markerHeight="${endArrowHeight}" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L18,7 L0,14 z" fill="${state.settings.connectorEndColor || state.settings.connectorColor || state.settings.accentColor}"></path></marker>
    <marker id="connector-dot-start" viewBox="0 0 12 12" markerWidth="${startDotSize}" markerHeight="${startDotSize}" refX="12" refY="6" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><circle cx="6" cy="6" r="4" fill="${state.settings.connectorStartColor || state.settings.connectorColor || state.settings.accentColor}"></circle></marker>
    <marker id="connector-dot-end" viewBox="0 0 12 12" markerWidth="${endDotSize}" markerHeight="${endDotSize}" refX="12" refY="6" orient="auto" markerUnits="userSpaceOnUse"><circle cx="6" cy="6" r="4" fill="${state.settings.connectorEndColor || state.settings.connectorColor || state.settings.accentColor}"></circle></marker>
    <marker id="connector-square-start" viewBox="0 0 12 12" markerWidth="${startSquareSize}" markerHeight="${startSquareSize}" refX="12" refY="6" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><rect x="3" y="3" width="6" height="6" fill="${state.settings.connectorStartColor || state.settings.connectorColor || state.settings.accentColor}"></rect></marker>
    <marker id="connector-square-end" viewBox="0 0 12 12" markerWidth="${endSquareSize}" markerHeight="${endSquareSize}" refX="12" refY="6" orient="auto" markerUnits="userSpaceOnUse"><rect x="3" y="3" width="6" height="6" fill="${state.settings.connectorEndColor || state.settings.connectorColor || state.settings.accentColor}"></rect></marker>
  </defs>`;
  dom.connectorLayer.innerHTML = `${defs}${paths.join('')}${decorations.join('')}`;

  if (connectorClass === 'anim-connector-draw') {
    dom.connectorLayer.querySelectorAll('.connector-line').forEach((path) => {
      try {
        const length = path.getTotalLength();
        path.style.setProperty('--dash-start', `${length}`);
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      } catch (error) {
        // getTotalLength can fail on disconnected SVG nodes; safe to ignore.
      }
    });
  }
}

function updateHeaderHeight() {
  const measured = dom.slideHeader?.offsetHeight || 0;
  const headerHeight = Math.max(8, measured + 2);
  dom.slide.style.setProperty('--header-height', `${headerHeight}px`);
}

function applySlideBackgroundLayers() {
  const bg = state.settings.bgColor || '#ffffff';
  const gradientColor2 = state.settings.bgGradientColor2 || '#dfe8f3';
  const depth = clamp(Number(state.settings.backgroundDepth || 0) / 100, 0, 1);
  const images = [];
  const sizes = [];
  const positions = [];
  const repeats = [];

  if (depth > 0) {
    images.push(`radial-gradient(1000px 480px at 50% -20%, rgba(255,255,255,${0.28 + depth * 0.24}), rgba(255,255,255,0))`);
    sizes.push('auto');
    positions.push('center top');
    repeats.push('no-repeat');
  }

  if (state.settings.bgGradientEnabled) {
    images.push(`linear-gradient(155deg, ${withAlpha(bg, '26')} 0%, ${withAlpha(gradientColor2, 'B8')} 100%)`);
    sizes.push('cover');
    positions.push('center center');
    repeats.push('no-repeat');
  }

  if (state.settings.bgImage) {
    images.push(`url(${state.settings.bgImage})`);
    sizes.push('cover');
    positions.push('center center');
    repeats.push('no-repeat');
  }

  dom.slide.style.backgroundColor = bg;
  dom.slide.style.backgroundImage = images.length ? images.join(', ') : 'none';
  dom.slide.style.backgroundSize = sizes.length ? sizes.join(', ') : 'auto';
  dom.slide.style.backgroundPosition = positions.length ? positions.join(', ') : 'center';
  dom.slide.style.backgroundRepeat = repeats.length ? repeats.join(', ') : 'no-repeat';
}

function legendTitleForMode(mode) {
  const labels = {
    department: 'Departments',
    position: 'Positions',
    location: 'Locations',
    employmentType: 'Employment Types',
    performance: 'Performance',
    diversityGroup: 'DEI Groups',
    span: 'Span of Control',
    budget: 'Budget'
  };
  return labels[mode] || 'Legend';
}

function activeLegendItems() {
  const mode = state.settings.orgChartColorBy || 'none';
  if (mode === 'none' || state.settings.showChartLegend === false || state.settings.legendPosition === 'hidden') {
    return [];
  }
  const values = new Set();
  Object.keys(state.nodes).forEach((nodeId) => {
    const member = getMemberById(state.nodes[nodeId]?.memberId);
    if (!member) {
      return;
    }
    values.add(memberOrgViewValue(member, nodeId, mode));
  });
  return Array.from(values)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 12)
    .map((value) => ({ value, color: colorFromValue(value) }));
}

function renderSlideHeader() {
  if (!dom.slideHeader) {
    return;
  }
  const logo = state.settings.showChartLogo !== false && state.settings.chartLogo
    ? `<img class="chart-logo" src="${state.settings.chartLogo}" alt="Chart logo" />`
    : '';
  const title = state.settings.title
    ? `<h1 id="slideTitle" class="slide-title">${escapeHtml(state.settings.title)}</h1>`
    : '';
  const legendItems = activeLegendItems();
  const legend = legendItems.length
    ? `
      <div class="chart-legend chart-legend-${escapeHtml(state.settings.legendPosition || 'top-right')}">
        <div class="chart-legend-title">${escapeHtml(legendTitleForMode(state.settings.orgChartColorBy))}</div>
        <div class="chart-legend-items">
          ${legendItems.map((item) => `
            <span class="chart-legend-item">
              <span class="chart-legend-swatch" style="background:${item.color}"></span>
              <span>${escapeHtml(item.value)}</span>
            </span>
          `).join('')}
        </div>
      </div>
    `
    : '';
  dom.slideHeader.innerHTML = `${logo}${title}${legend}`;
  dom.slideTitle = document.getElementById('slideTitle');
}

function applyStyleToSlide() {
  dom.slide.style.setProperty('--slide-bg', state.settings.bgColor);
  dom.slide.style.setProperty('--slide-accent', state.settings.accentColor);
  dom.slide.style.setProperty('--slide-title', state.settings.headingColor);
  dom.slide.style.setProperty('--card-bg', state.settings.cardBg);
  dom.slide.style.setProperty('--card-title', state.settings.cardTextColor);
  dom.slide.style.setProperty('--card-subtitle', state.settings.cardSubColor);
  dom.slide.style.setProperty('--card-outline', state.settings.outlineColor);
  const blurStrength = clamp(Number(state.settings.blurStrength || 10), 0, 24);
  const shadowIntensity = clamp((Number(state.settings.shadowIntensity) || 100) / 100, 0, 2.2);
  dom.slide.style.boxShadow = `0 ${Math.round(18 * shadowIntensity)}px ${Math.round(34 * shadowIntensity)}px rgba(23, 33, 45, ${0.22 * Math.max(0.4, shadowIntensity)})`;
  dom.slide.style.backdropFilter = `blur(${Math.round(blurStrength * 0.12)}px)`;

  applySlideBackgroundLayers();

  renderSlideHeader();

  if (dom.slideTitle) {
    dom.slideTitle.textContent = state.settings.title;
    dom.slideTitle.style.color = state.settings.headingColor;
    dom.slideTitle.style.fontSize = `${state.settings.headingSize}px`;
    dom.slideTitle.style.fontFamily = `${state.settings.headingFont}, sans-serif`;
    dom.slideTitle.style.fontWeight = String(state.settings.headingWeight || (state.settings.headingBold ? 800 : 600));
    dom.slideTitle.style.lineHeight = String(state.settings.headingLineHeight || 1.02);
    dom.slideTitle.style.letterSpacing = `${Number(state.settings.headingTracking || 0).toFixed(2)}em`;
  }
  updateHeaderHeight();

  dom.slide.style.backgroundBlendMode = 'normal';
}

function contentBoundsFromLayouts(layouts) {
  const entries = Object.values(layouts || {});
  if (!entries.length) {
    return null;
  }
  return entries.reduce(
    (bounds, layout) => ({
      left: Math.min(bounds.left, layout.x),
      top: Math.min(bounds.top, layout.y),
      right: Math.max(bounds.right, layout.x + layout.width),
      bottom: Math.max(bounds.bottom, layout.y + layout.height)
    }),
    { left: Number.POSITIVE_INFINITY, top: Number.POSITIVE_INFINITY, right: 0, bottom: 0 }
  );
}

function nodeCoordinateBounds() {
  const nodes = Object.values(state.nodes).filter(
    (node) => Number.isFinite(Number(node.xCenter)) && Number.isFinite(Number(node.yCenter))
  );
  if (!nodes.length) {
    return null;
  }
  const cardSize = currentCardSize();
  return nodes.reduce(
    (bounds, node) => ({
      left: Math.min(bounds.left, Number(node.xCenter) - cardSize.width / 2),
      top: Math.min(bounds.top, Number(node.yCenter) - cardSize.height / 2),
      right: Math.max(bounds.right, Number(node.xCenter) + cardSize.width / 2),
      bottom: Math.max(bounds.bottom, Number(node.yCenter) + cardSize.height / 2)
    }),
    {
      left: Number.POSITIVE_INFINITY,
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY
    }
  );
}

function canvasBaseSize() {
  const hostWidth = dom.previewHost?.clientWidth || 1040;
  const hostHeight = dom.previewHost?.clientHeight || 760;
  const cardSize = currentCardSize();
  const bounds = nodeCoordinateBounds();
  const contentWidth = bounds ? bounds.right + cardSize.width * 5 : 0;
  const contentHeight = bounds ? bounds.bottom + cardSize.height * 5 : 0;
  return {
    width: Math.max(2400, Math.round(window.innerWidth * 2.2), Math.round(hostWidth * 1.8), Number(state.canvasBoardWidth) || 0, contentWidth + 1200),
    height: Math.max(1800, Math.round(window.innerHeight * 1.8), Math.round(hostHeight * 1.6), Number(state.canvasBoardHeight) || 0, contentHeight + 900)
  };
}

function ensureCanvasBoardSize(width, height) {
  if (Number.isFinite(Number(width))) {
    state.canvasBoardWidth = Math.max(Number(state.canvasBoardWidth) || 0, Math.ceil(Number(width)));
  }
  if (Number.isFinite(Number(height))) {
    state.canvasBoardHeight = Math.max(Number(state.canvasBoardHeight) || 0, Math.ceil(Number(height)));
  }
}

function ensureCanvasBoardContainsPoint(x, y) {
  const cardSize = currentCardSize();
  const base = canvasBaseSize();
  const edgePadX = cardSize.width * 4;
  const edgePadY = cardSize.height * 4;
  const nextWidth = x > base.width - edgePadX ? x + edgePadX : base.width;
  const nextHeight = y > base.height - edgePadY ? y + edgePadY : base.height;
  ensureCanvasBoardSize(nextWidth, nextHeight);
}

function applyCanvasZoom(previousZoom = state.canvasZoom, anchor = null) {
  if (!dom.slide || !dom.canvasWorld || !dom.previewHost) {
    return;
  }
  const zoom = clamp(Number(state.canvasZoom) || 1, CANVAS_ZOOM_MIN, CANVAS_ZOOM_MAX);
  state.canvasZoom = zoom;
  const base = canvasBaseSize();
  const anchorX = anchor?.x ?? (dom.previewHost.scrollLeft + dom.previewHost.clientWidth / 2) / Math.max(previousZoom, 0.01);
  const anchorY = anchor?.y ?? (dom.previewHost.scrollTop + dom.previewHost.clientHeight / 2) / Math.max(previousZoom, 0.01);

  dom.slide.style.width = `${base.width}px`;
  dom.slide.style.height = `${base.height}px`;
  dom.slide.style.minWidth = `${base.width}px`;
  dom.slide.style.minHeight = `${base.height}px`;
  dom.slide.style.transform = `scale(${zoom})`;
  dom.slide.style.marginBottom = '0';
  dom.canvasWorld.style.width = `${Math.round(base.width * zoom)}px`;
  dom.canvasWorld.style.height = `${Math.round(base.height * zoom)}px`;
  dom.canvasWorld.style.minWidth = `${Math.round(base.width * zoom)}px`;
  dom.canvasWorld.style.minHeight = `${Math.round(base.height * zoom)}px`;

  if (dom.zoomResetBtn) {
    dom.zoomResetBtn.textContent = `${Math.round(zoom * 100)}%`;
  }
  if (dom.zoomOutBtn) {
    dom.zoomOutBtn.disabled = zoom <= CANVAS_ZOOM_MIN + 0.001;
  }
  if (dom.zoomInBtn) {
    dom.zoomInBtn.disabled = zoom >= CANVAS_ZOOM_MAX - 0.001;
  }

  const maxLeft = Math.max(0, dom.previewHost.scrollWidth - dom.previewHost.clientWidth);
  const maxTop = Math.max(0, dom.previewHost.scrollHeight - dom.previewHost.clientHeight);
  dom.previewHost.scrollLeft = clamp(anchorX * zoom - dom.previewHost.clientWidth / 2, 0, maxLeft);
  dom.previewHost.scrollTop = clamp(anchorY * zoom - dom.previewHost.clientHeight / 2, 0, maxTop);
  syncConnectorLayerSize();
  updateMinimap();
}

function setCanvasZoom(nextZoom, anchor = null) {
  const previousZoom = state.canvasZoom;
  state.canvasZoom = clamp(nextZoom, CANVAS_ZOOM_MIN, CANVAS_ZOOM_MAX);
  applyCanvasZoom(previousZoom, anchor);
}

function zoomBy(delta, anchor = null) {
  setCanvasZoom(state.canvasZoom + delta, anchor);
}

function updateMinimap(layouts = null) {
  if (!dom.canvasMinimap || !dom.minimapContent || !dom.minimapViewport || !dom.previewHost || !dom.cardLayer) {
    return;
  }
  if (state.showMinimap === false) {
    dom.minimapContent.innerHTML = '';
    return;
  }
  const boardWidth = Math.max(1, dom.cardLayer.clientWidth || 1);
  const boardHeight = Math.max(1, dom.cardLayer.clientHeight || 1);
  const mapWidth = dom.canvasMinimap.clientWidth || 164;
  const mapHeight = dom.canvasMinimap.clientHeight || 112;
  const mapScale = Math.min(mapWidth / boardWidth, mapHeight / boardHeight);
  const renderedWidth = boardWidth * mapScale;
  const renderedHeight = boardHeight * mapScale;
  const offsetX = (mapWidth - renderedWidth) / 2;
  const offsetY = (mapHeight - renderedHeight) / 2;
  const activeLayouts = layouts || rowLayouts();

  dom.minimapContent.innerHTML = Object.values(activeLayouts)
    .map((layout) => {
      const left = offsetX + layout.x * mapScale;
      const top = offsetY + layout.y * mapScale;
      const width = Math.max(3, layout.width * mapScale);
      const height = Math.max(3, layout.height * mapScale);
      return `<span class="minimap-node" style="left:${left}px;top:${top}px;width:${width}px;height:${height}px;"></span>`;
    })
    .join('');

  const zoom = Math.max(state.canvasZoom || 1, 0.01);
  const visibleLeft = dom.previewHost.scrollLeft / zoom;
  const visibleTop = dom.previewHost.scrollTop / zoom;
  const visibleWidth = dom.previewHost.clientWidth / zoom;
  const visibleHeight = dom.previewHost.clientHeight / zoom;
  dom.minimapViewport.style.left = `${offsetX + visibleLeft * mapScale}px`;
  dom.minimapViewport.style.top = `${offsetY + visibleTop * mapScale}px`;
  dom.minimapViewport.style.width = `${Math.max(12, visibleWidth * mapScale)}px`;
  dom.minimapViewport.style.height = `${Math.max(10, visibleHeight * mapScale)}px`;
}

function centerCanvasOnContent(layouts, smooth = true) {
  if (!dom.previewHost || !dom.cardLayer) {
    return;
  }
  const bounds = contentBoundsFromLayouts(layouts);
  if (!bounds) {
    const maxLeft = Math.max(0, dom.previewHost.scrollWidth - dom.previewHost.clientWidth);
    const maxTop = Math.max(0, dom.previewHost.scrollHeight - dom.previewHost.clientHeight);
    dom.previewHost.scrollTo({
      left: maxLeft / 2,
      top: maxTop / 2,
      behavior: smooth ? 'smooth' : 'auto'
    });
    return;
  }

  const contentCenterX = (bounds.left + bounds.right) / 2;
  const contentCenterY = (bounds.top + bounds.bottom) / 2;
  const cardLayerLeft = dom.cardLayer.offsetLeft || 0;
  const cardLayerTop = dom.cardLayer.offsetTop || 0;
  const maxLeft = Math.max(0, dom.previewHost.scrollWidth - dom.previewHost.clientWidth);
  const maxTop = Math.max(0, dom.previewHost.scrollHeight - dom.previewHost.clientHeight);
  const zoom = Math.max(state.canvasZoom || 1, 0.01);
  const left = clamp((cardLayerLeft + contentCenterX) * zoom - dom.previewHost.clientWidth / 2, 0, maxLeft);
  const top = clamp((cardLayerTop + contentCenterY) * zoom - dom.previewHost.clientHeight / 2, 0, maxTop);

  dom.previewHost.scrollTo({
    left,
    top,
    behavior: smooth ? 'smooth' : 'auto'
  });
}

function fitCanvasToContent(layouts, smooth = false) {
  if (!dom.previewHost || !dom.cardLayer) {
    return;
  }
  const bounds = contentBoundsFromLayouts(layouts);
  if (!bounds) {
    setCanvasZoom(1);
    centerCanvasOnContent({}, smooth);
    return;
  }

  const contentWidth = Math.max(1, bounds.right - bounds.left);
  const contentHeight = Math.max(1, bounds.bottom - bounds.top);
  const fitPadding = 96;
  const availableWidth = Math.max(1, dom.previewHost.clientWidth - fitPadding);
  const availableHeight = Math.max(1, dom.previewHost.clientHeight - fitPadding);
  const nextZoom = clamp(
    Math.min(1, availableWidth / contentWidth, availableHeight / contentHeight),
    CANVAS_ZOOM_MIN,
    CANVAS_ZOOM_MAX
  );
  const anchor = {
    x: (bounds.left + bounds.right) / 2,
    y: (bounds.top + bounds.bottom) / 2
  };

  setCanvasZoom(nextZoom, anchor);
  centerCanvasOnContent(layouts, smooth);
  updateMinimap(layouts);
}

function refreshCanvas(persist = true, options = {}) {
  applyStyleToSlide();
  applyCanvasZoom(state.canvasZoom);
  const layouts = rowLayouts();
  renderCards(layouts);
  renderConnectors(layouts);
  updateToolbarViewButtons();
  updateMinimap(layouts);
  updateHistoryButtons();
  if (options.centerContent) {
    requestAnimationFrame(() => centerCanvasOnContent(layouts, options.smoothCenter !== false));
  }
  if (persist) {
    hasRenderedCanvasOnce = true;
    scheduleStatePersistence();
    return true;
  }
  hasRenderedCanvasOnce = true;
  return true;
}

let renderFrameHandle = null;
let pendingRenderOptions = null;

function renderNow(options = {}) {
  return refreshCanvas(options.persist !== false, options);
}

function render(options = {}) {
  pendingRenderOptions = options;
  if (renderFrameHandle) {
    cancelAnimationFrame(renderFrameHandle);
  }
  renderFrameHandle = requestAnimationFrame(() => {
    renderFrameHandle = null;
    const nextOptions = pendingRenderOptions || {};
    pendingRenderOptions = null;
    refreshCanvas(nextOptions.persist !== false, nextOptions);
  });
  return true;
}

function addMemberFromForm() {
  const name = dom.newMemberName.value.trim();
  const title = dom.newMemberTitle.value.trim();
  const department = dom.newMemberDepartment.value.trim();
  const email = dom.newMemberEmail?.value.trim() || '';
  if (!name || !title || !department) {
    notify('Name, position, and department are required.');
    return;
  }

  const isEditing = Boolean(state.editingMemberId);
  const editingMember = isEditing ? getMemberById(state.editingMemberId) : null;
  if (isEditing && !editingMember) {
    resetMemberForm();
    notify('Selected member no longer exists.');
    return;
  }

  const nextId = isEditing
    ? state.editingMemberId
    : `m${state.members.reduce((max, member) => {
      const value = Number(String(member.id || '').replace(/^m/, ''));
      return Number.isFinite(value) ? Math.max(max, value) : max;
    }, 0) + 1}`;
  const file = dom.newMemberPhoto.files[0];

  const finish = (photo) => {
    if (isEditing) {
      state.members = state.members.map((member) =>
        member.id === nextId
          ? { ...member, name, title, department, email, location, photo: photo || member.photo }
          : member
      );
    } else {
      state.members.push({ id: nextId, name, title, department, email, location, photo });
    }
    resetMemberForm();
    renderLibrary();
    notify(isEditing ? `Updated ${name}.` : `Added ${name} to library.`);
    render();
    scheduleFullStatePersistence();
  };

  if (file) {
    fileToDataUrl(file).then(finish);
  } else {
    finish(isEditing ? null : createAvatar(name, state.members.length + 1));
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getImageDimensions(file) {
  return new Promise((resolve) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: image.naturalWidth || 1, height: image.naturalHeight || 1 });
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ width: 1, height: 1 });
    };
    image.src = url;
  });
}

function normalizeHeaderKey(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizePhotoKey(value) {
  return String(value || '').trim().replace(/^.*[\\/]/, '').toLowerCase();
}

function guessPhotoMimeType(name) {
  const lower = String(name || '').toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

function releaseZipPhotoUrls() {
  activeZipPhotoUrls.forEach((url) => URL.revokeObjectURL(url));
  activeZipPhotoUrls.clear();
}

function extractMembersFromWorkbook(workbook) {
  const headerAliases = {
    initials: ['teammemberinitials', 'initials'],
    name: ['name', 'fullname', 'teammembername'],
    email: ['contactemail', 'email', 'emailaddress'],
    telephone: ['telephone', 'phone', 'phonenumber', 'mobile', 'cell', 'cellphone'],
    address: ['address', 'officeaddress', 'mailingaddress'],
    location: ['location', 'office', 'site', 'worklocation'],
    employmentType: ['employmenttype', 'employeetype', 'workerclassification', 'type'],
    employmentStatus: ['employmentstatus', 'status', 'workstatus'],
    performance: ['performance', 'talentrating', 'rating', 'ninebox', '9box'],
    potential: ['potential', 'potentialrating'],
    salary: ['salary', 'compensation', 'basepay', 'annualsalary'],
    budget: ['budget', 'budgetstatus', 'costcenter', 'cost'],
    manager: ['manager', 'reportsto', 'supervisor'],
    diversityGroup: ['diversitygroup', 'deigroup', 'demographicgroup', 'group'],
    position: ['position', 'title', 'role', 'jobtitle'],
    department: ['department', 'dept'],
    photo: ['photofilename', 'photo', 'photofile', 'image', 'filename']
  };

  const matchHeaderIndex = (headers, aliases) => headers.findIndex((header) => aliases.includes(header));
  let bestMatch = null;

  workbook.SheetNames.forEach((sheetName) => {
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: '' });
    const scanLimit = Math.min(rows.length, 25);

    for (let rowIndex = 0; rowIndex < scanLimit; rowIndex += 1) {
      const headerRow = Array.isArray(rows[rowIndex]) ? rows[rowIndex] : [];
      const normalizedHeaders = headerRow.map(normalizeHeaderKey);
      const nameIdx = matchHeaderIndex(normalizedHeaders, headerAliases.name);
      const positionIdx = matchHeaderIndex(normalizedHeaders, headerAliases.position);
      const deptIdx = matchHeaderIndex(normalizedHeaders, headerAliases.department);
      const initialsIdx = matchHeaderIndex(normalizedHeaders, headerAliases.initials);
      const emailIdx = matchHeaderIndex(normalizedHeaders, headerAliases.email);
      const telephoneIdx = matchHeaderIndex(normalizedHeaders, headerAliases.telephone);
      const addressIdx = matchHeaderIndex(normalizedHeaders, headerAliases.address);
      const locationIdx = matchHeaderIndex(normalizedHeaders, headerAliases.location);
      const employmentTypeIdx = matchHeaderIndex(normalizedHeaders, headerAliases.employmentType);
      const employmentStatusIdx = matchHeaderIndex(normalizedHeaders, headerAliases.employmentStatus);
      const performanceIdx = matchHeaderIndex(normalizedHeaders, headerAliases.performance);
      const potentialIdx = matchHeaderIndex(normalizedHeaders, headerAliases.potential);
      const salaryIdx = matchHeaderIndex(normalizedHeaders, headerAliases.salary);
      const budgetIdx = matchHeaderIndex(normalizedHeaders, headerAliases.budget);
      const managerIdx = matchHeaderIndex(normalizedHeaders, headerAliases.manager);
      const diversityGroupIdx = matchHeaderIndex(normalizedHeaders, headerAliases.diversityGroup);
      const photoIdx = matchHeaderIndex(normalizedHeaders, headerAliases.photo);
      const score = [
        nameIdx,
        positionIdx,
        deptIdx,
        initialsIdx,
        emailIdx,
        telephoneIdx,
        addressIdx,
        locationIdx,
        employmentTypeIdx,
        employmentStatusIdx,
        performanceIdx,
        potentialIdx,
        salaryIdx,
        budgetIdx,
        managerIdx,
        diversityGroupIdx,
        photoIdx
      ].filter((idx) => idx >= 0).length;

      if (nameIdx >= 0 && score >= 3 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = {
          score,
          rows,
          rowIndex,
          columnMap: {
            nameIdx,
            positionIdx,
            deptIdx,
            initialsIdx,
            emailIdx,
            telephoneIdx,
            addressIdx,
            locationIdx,
            employmentTypeIdx,
            employmentStatusIdx,
            performanceIdx,
            potentialIdx,
            salaryIdx,
            budgetIdx,
            managerIdx,
            diversityGroupIdx,
            photoIdx
          }
        };
      }
    }
  });

  if (!bestMatch) {
    return [];
  }

  const members = [];
  for (let rowIndex = bestMatch.rowIndex + 1; rowIndex < bestMatch.rows.length; rowIndex += 1) {
    const row = bestMatch.rows[rowIndex] || [];
    const name = String(row[bestMatch.columnMap.nameIdx] || '').trim();
    if (!name) {
      continue;
    }

    members.push({
      name,
      title: bestMatch.columnMap.positionIdx >= 0 ? String(row[bestMatch.columnMap.positionIdx] || '').trim() : '',
      department: bestMatch.columnMap.deptIdx >= 0 ? String(row[bestMatch.columnMap.deptIdx] || '').trim() : '',
      initials: bestMatch.columnMap.initialsIdx >= 0 ? String(row[bestMatch.columnMap.initialsIdx] || '').trim() : '',
      email: bestMatch.columnMap.emailIdx >= 0 ? String(row[bestMatch.columnMap.emailIdx] || '').trim() : '',
      telephone: bestMatch.columnMap.telephoneIdx >= 0 ? String(row[bestMatch.columnMap.telephoneIdx] || '').trim() : '',
      address: bestMatch.columnMap.addressIdx >= 0 ? String(row[bestMatch.columnMap.addressIdx] || '').trim() : '',
      location: bestMatch.columnMap.locationIdx >= 0 ? String(row[bestMatch.columnMap.locationIdx] || '').trim() : '',
      employmentType: bestMatch.columnMap.employmentTypeIdx >= 0 ? String(row[bestMatch.columnMap.employmentTypeIdx] || '').trim() : '',
      employmentStatus: bestMatch.columnMap.employmentStatusIdx >= 0 ? String(row[bestMatch.columnMap.employmentStatusIdx] || '').trim() : '',
      performance: bestMatch.columnMap.performanceIdx >= 0 ? String(row[bestMatch.columnMap.performanceIdx] || '').trim() : '',
      potential: bestMatch.columnMap.potentialIdx >= 0 ? String(row[bestMatch.columnMap.potentialIdx] || '').trim() : '',
      salary: bestMatch.columnMap.salaryIdx >= 0 ? String(row[bestMatch.columnMap.salaryIdx] || '').trim() : '',
      budget: bestMatch.columnMap.budgetIdx >= 0 ? String(row[bestMatch.columnMap.budgetIdx] || '').trim() : '',
      manager: bestMatch.columnMap.managerIdx >= 0 ? String(row[bestMatch.columnMap.managerIdx] || '').trim() : '',
      diversityGroup: bestMatch.columnMap.diversityGroupIdx >= 0 ? String(row[bestMatch.columnMap.diversityGroupIdx] || '').trim() : '',
      photoFileName: bestMatch.columnMap.photoIdx >= 0 ? String(row[bestMatch.columnMap.photoIdx] || '').trim() : ''
    });
  }

  return members;
}

async function importLibraryFromZip(file) {
  if (!window.JSZip || !window.XLSX) {
    setLibraryUploadStatus('ZIP tools are still loading. Refresh the page and try again.', 'error');
    notify('ZIP import libraries are not available yet. Refresh and try again.');
    return;
  }
  if (file.size > MAX_LIBRARY_ZIP_BYTES) {
    const message = `ZIP is ${formatFileSize(file.size)}. Please use a file under 250 MB.`;
    setLibraryUploadStatus(message, 'error');
    notify('ZIP is over 250 MB. Please use the optimized TeamGen ZIP.');
    return;
  }

  setLibraryUploadStatus(`Reading ${file.name} (${formatFileSize(file.size)})...`, 'loading');
  notify('Reading team management ZIP...');
  const zip = await JSZip.loadAsync(file);
  const entries = Object.values(zip.files).filter((entry) => !entry.dir);
  const workbookEntry = entries.find((entry) => /\.(xlsx|xlsm|xls)$/i.test(entry.name));
  if (!workbookEntry) {
    setLibraryUploadStatus('No Excel file found in the ZIP. Add the TeamGen data table workbook and try again.', 'error');
    notify('No Excel file found in ZIP.');
    return;
  }

  setLibraryUploadStatus(`Found ${workbookEntry.name}. Reading team table...`, 'loading');
  const workbookBuffer = await workbookEntry.async('arraybuffer');
  const workbook = XLSX.read(workbookBuffer, { type: 'array' });
  const parsedMembers = extractMembersFromWorkbook(workbook);
  if (!parsedMembers.length) {
    setLibraryUploadStatus('No valid team member rows found. Check that the workbook has Name and PhotoFileName columns.', 'error');
    notify('No valid team member table found in Excel file.');
    return;
  }

  const photoEntries = new Map();
  entries
    .filter((entry) => /\.(png|jpe?g|webp|gif)$/i.test(entry.name))
    .forEach((entry) => {
      photoEntries.set(normalizePhotoKey(entry.name), entry);
    });

  releaseZipPhotoUrls();
  const importedMembers = [];
  let matchedPhotos = 0;

  for (const [index, member] of parsedMembers.entries()) {
    const preferredKey = normalizePhotoKey(member.photoFileName);
    const fallbackKey = normalizePhotoKey(`${member.name}.jpg`);
    const photoEntry = (preferredKey && photoEntries.get(preferredKey)) || photoEntries.get(fallbackKey);
    let photo = createAvatar(member.name, index + 1);

    if (photoEntry) {
      const blob = await photoEntry.async('blob');
      photo = await fileToDataUrl(new Blob([blob], { type: guessPhotoMimeType(photoEntry.name) }));
      matchedPhotos += 1;
    }

    importedMembers.push({
      id: `m${index + 1}`,
      name: member.name,
      title: member.title || 'Team Member',
      department: member.department || 'General',
      initials: member.initials || '',
      email: member.email || '',
      telephone: member.telephone || '',
      address: member.address || '',
      location: member.location || '',
      employmentType: member.employmentType || '',
      employmentStatus: member.employmentStatus || '',
      performance: member.performance || '',
      potential: member.potential || '',
      salary: member.salary || '',
      budget: member.budget || '',
      manager: member.manager || '',
      diversityGroup: member.diversityGroup || '',
      photo,
      photoFileName: member.photoFileName || ''
    });
  }

  state.members = importedMembers;
  clearCanvas();
  state.selectedCardId = null;
  state.editingMemberId = null;
  state.nodeSequence = 1;
  resetMemberForm();
  renderLibrary();
  refreshCanvas(false);
  const savedToBrowser = await persistStateAsync();
  if (savedToBrowser) {
    setLibraryUploadStatus(`Loaded ${importedMembers.length} members. Matched ${matchedPhotos} photos.`, 'success');
    notify(`Loaded ${importedMembers.length} members from ZIP. Matched ${matchedPhotos} photos.`);
  } else {
    setLibraryUploadStatus(
      `Loaded ${importedMembers.length} members, but browser storage could not save it for refresh. Use smaller photos or reload the ZIP after refresh.`,
      'error'
    );
    notify('ZIP loaded, but browser storage is full for this library.');
  }
}

async function runLibraryZipImport(file) {
  if (!file) {
    setLibraryUploadStatus('Choose a TeamGen ZIP first.', 'error');
    notify('Choose a Team Management ZIP first.');
    return;
  }

  setLibraryImportBusy(true);
  try {
    await importLibraryFromZip(file);
  } catch (error) {
    console.error(error);
    setLibraryUploadStatus('Could not import that ZIP. Make sure it includes an Excel data table and a TeamPhotos folder.', 'error');
    notify('Could not import ZIP library. Check the file and try again.');
  } finally {
    setLibraryImportBusy(false);
  }
}

function removeLibraryZip() {
  releaseZipPhotoUrls();
  state.members = [];
  clearCanvas();
  resetMemberForm();
  if (dom.libraryZipInput) {
    dom.libraryZipInput.value = '';
  }
  setLibraryUploadStatus('ZIP library removed. Choose another TeamGen ZIP to reload.', 'info');
  renderLibrary();
  render();
  notify('Removed ZIP library data.');
}

function normalizeMatchText(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function textTokens(value) {
  return String(value || '').toLowerCase().match(/[a-z0-9]+/g) || [];
}

function levenshteinDistance(a, b) {
  const left = String(a || '');
  const right = String(b || '');
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  const current = new Array(right.length + 1);

  for (let i = 0; i < left.length; i += 1) {
    current[0] = i + 1;
    for (let j = 0; j < right.length; j += 1) {
      const cost = left[i] === right[j] ? 0 : 1;
      current[j + 1] = Math.min(current[j] + 1, previous[j + 1] + 1, previous[j] + cost);
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[right.length] || 0;
}

function similarityScore(a, b) {
  const left = normalizeMatchText(a);
  const right = normalizeMatchText(b);
  if (!left || !right) {
    return 0;
  }
  if (left.includes(right) && right.length >= 6) {
    return 1;
  }
  if (right.includes(left) && left.length >= 6) {
    return Math.min(left.length, right.length) / Math.max(left.length, right.length);
  }
  const distance = levenshteinDistance(left, right);
  return 1 - distance / Math.max(left.length, right.length);
}

function getOcrLines(result) {
  const rawLines = result?.data?.lines || [];
  const lines = rawLines
    .map((line) => {
      const text = String(line.text || '').replace(/\s+/g, ' ').trim();
      const bbox = line.bbox || {};
      return {
        text,
        x: Number(bbox.x0 || 0),
        y: Number(bbox.y0 || 0),
        width: Math.max(1, Number(bbox.x1 || 0) - Number(bbox.x0 || 0)),
        height: Math.max(1, Number(bbox.y1 || 0) - Number(bbox.y0 || 0))
      };
    })
    .filter((line) => line.text.length >= 2);

  if (lines.length) {
    return lines;
  }

  const words = result?.data?.words || [];
  return words
    .map((word) => {
      const text = String(word.text || '').replace(/\s+/g, ' ').trim();
      const bbox = word.bbox || {};
      return {
        text,
        x: Number(bbox.x0 || 0),
        y: Number(bbox.y0 || 0),
        width: Math.max(1, Number(bbox.x1 || 0) - Number(bbox.x0 || 0)),
        height: Math.max(1, Number(bbox.y1 || 0) - Number(bbox.y0 || 0))
      };
    })
    .filter((line) => line.text.length >= 2);
}

function bestMemberForText(text, usedMemberIds = new Set()) {
  let best = null;
  state.members.forEach((member) => {
    if (usedMemberIds.has(member.id)) {
      return;
    }
    const score = similarityScore(text, member.name);
    if (score >= 0.78 && (!best || score > best.score)) {
      best = { member, score };
    }
  });
  return best;
}

function inferDepartmentFromNearbyText(line, lines) {
  const departmentCounts = new Map();
  state.members.forEach((member) => {
    const department = String(member.department || '').trim();
    if (department) {
      departmentCounts.set(department, (departmentCounts.get(department) || 0) + 1);
    }
  });

  let best = null;
  lines.forEach((candidate) => {
    const dy = candidate.y - line.y;
    const dx = Math.abs(candidate.x - line.x);
    if (dy < -16 || dy > 120 || dx > 240) {
      return;
    }
    departmentCounts.forEach((count, department) => {
      const score = similarityScore(candidate.text, department);
      if (score >= 0.62 && (!best || score > best.score)) {
        best = { department, score, count };
      }
    });
  });

  return best?.department || '';
}

function fallbackMemberFromDepartment(department, usedMemberIds = new Set()) {
  if (!department) {
    return null;
  }
  return state.members.find(
    (member) =>
      !usedMemberIds.has(member.id) &&
      similarityScore(member.department, department) >= 0.82
  ) || null;
}

function removeImagePlaceholderMembers() {
  const placeholderIds = new Set(state.members.filter((member) => member.imagePlaceholder).map((member) => member.id));
  if (!placeholderIds.size) {
    return;
  }
  state.members = state.members.filter((member) => !placeholderIds.has(member.id));
  removeNodesForMemberIds(Array.from(placeholderIds));
}

function loadImageAnalysisCanvas(file, maxDimension = 1800) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      const naturalWidth = image.naturalWidth || 1;
      const naturalHeight = image.naturalHeight || 1;
      const scale = Math.min(1, maxDimension / Math.max(naturalWidth, naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(naturalHeight * scale));
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve({
        canvas,
        context,
        scale,
        width: naturalWidth,
        height: naturalHeight,
        analysisWidth: canvas.width,
        analysisHeight: canvas.height
      });
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not read the reference image.'));
    };
    image.src = url;
  });
}

function connectedComponentsFromMask(width, height, isActive) {
  const visited = new Uint8Array(width * height);
  const components = [];
  const stack = [];

  for (let start = 0; start < visited.length; start += 1) {
    if (visited[start] || !isActive(start)) {
      continue;
    }
    visited[start] = 1;
    stack.push(start);
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    let pixels = 0;

    while (stack.length) {
      const index = stack.pop();
      const x = index % width;
      const y = Math.floor(index / width);
      pixels += 1;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

      const neighbors = [index - 1, index + 1, index - width, index + width];
      neighbors.forEach((next) => {
        if (next < 0 || next >= visited.length || visited[next] || !isActive(next)) {
          return;
        }
        if ((next === index - 1 && x === 0) || (next === index + 1 && x === width - 1)) {
          return;
        }
        visited[next] = 1;
        stack.push(next);
      });
    }

    components.push({
      x: minX,
      y: minY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
      pixels
    });
  }

  return components;
}

function median(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
  if (!sorted.length) {
    return 0;
  }
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function detectCardBoxesFromImageAnalysis(analysis) {
  const imageData = analysis.context.getImageData(0, 0, analysis.analysisWidth, analysis.analysisHeight);
  const data = imageData.data;
  const width = analysis.analysisWidth;
  const height = analysis.analysisHeight;
  const isRed = (index) => {
    const offset = index * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    return r > 110 && r > g * 1.45 && r > b * 1.35 && g < 95 && b < 95;
  };
  const redBars = connectedComponentsFromMask(width, height, isRed)
    .filter((component) => {
      const aspect = component.width / Math.max(1, component.height);
      return component.width >= 34 && component.height <= 18 && aspect >= 4.8 && component.pixels >= component.width * 1.4;
    })
    .map((component) => ({
      left: component.x / analysis.scale,
      top: component.y / analysis.scale,
      right: (component.x + component.width) / analysis.scale,
      width: component.width / analysis.scale,
      height: component.height / analysis.scale
    }))
    .sort((a, b) => a.top - b.top || a.left - b.left);

  const mergedBars = [];
  redBars.forEach((bar) => {
    const existing = mergedBars.find(
      (candidate) =>
        Math.abs(candidate.top - bar.top) <= 8 &&
        Math.abs(candidate.left - bar.left) <= 14 &&
        Math.abs(candidate.right - bar.right) <= 18
    );
    if (existing) {
      existing.left = Math.min(existing.left, bar.left);
      existing.top = Math.min(existing.top, bar.top);
      existing.right = Math.max(existing.right, bar.right);
      existing.width = existing.right - existing.left;
      existing.height = Math.max(existing.height, bar.height);
    } else {
      mergedBars.push({ ...bar });
    }
  });

  const typicalWidth = median(mergedBars.map((bar) => bar.width)) || Math.max(160, analysis.width * 0.1);
  const typicalHeight = clamp(typicalWidth * 0.34, 58, 130);
  return mergedBars
    .filter((bar) => bar.width >= typicalWidth * 0.45 && bar.width <= typicalWidth * 1.8)
    .map((bar, index) => ({
      id: `card-${index}`,
      left: bar.left,
      top: bar.top,
      right: bar.right,
      bottom: Math.min(analysis.height, bar.top + typicalHeight),
      width: bar.width,
      height: typicalHeight,
      centerX: (bar.left + bar.right) / 2,
      centerY: bar.top + typicalHeight / 2
    }));
}

function rectsOverlap(a, b, padding = 0) {
  return !(
    a.right < b.left - padding ||
    a.left > b.right + padding ||
    a.bottom < b.top - padding ||
    a.top > b.bottom + padding
  );
}

function detectConnectorSegmentsFromImageAnalysis(analysis, cardBoxes = []) {
  const imageData = analysis.context.getImageData(0, 0, analysis.analysisWidth, analysis.analysisHeight);
  const data = imageData.data;
  const width = analysis.analysisWidth;
  const height = analysis.analysisHeight;
  const scaledCards = cardBoxes.map((card) => ({
    left: card.left * analysis.scale,
    right: card.right * analysis.scale,
    top: card.top * analysis.scale,
    bottom: card.bottom * analysis.scale
  }));
  const isConnectorPixel = (index) => {
    const x = index % width;
    const y = Math.floor(index / width);
    const offset = index * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    const alpha = data[offset + 3];
    if (alpha < 80) {
      return false;
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const neutral = max - min <= 34;
    const gray = neutral && r >= 105 && r <= 185 && g >= 105 && g <= 190 && b >= 105 && b <= 195;
    if (!gray) {
      return false;
    }
    return !scaledCards.some((card) => x >= card.left - 2 && x <= card.right + 2 && y >= card.top - 2 && y <= card.bottom + 2);
  };

  return connectedComponentsFromMask(width, height, isConnectorPixel)
    .filter((component) => {
      const longHorizontal = component.width >= 42 && component.height <= 14;
      const longVertical = component.height >= 32 && component.width <= 14;
      const enoughPixels = component.pixels >= Math.max(component.width, component.height) * 1.3;
      if (!enoughPixels || (!longHorizontal && !longVertical)) {
        return false;
      }
      const sourceRect = {
        left: component.x / analysis.scale,
        top: component.y / analysis.scale,
        right: (component.x + component.width) / analysis.scale,
        bottom: (component.y + component.height) / analysis.scale
      };
      return !cardBoxes.some((card) => rectsOverlap(sourceRect, card, 3));
    })
    .map((component) => ({
      left: component.x / analysis.scale,
      top: component.y / analysis.scale,
      right: (component.x + component.width) / analysis.scale,
      bottom: (component.y + component.height) / analysis.scale,
      width: component.width / analysis.scale,
      height: component.height / analysis.scale,
      centerX: (component.x + component.width / 2) / analysis.scale,
      centerY: (component.y + component.height / 2) / analysis.scale,
      orientation: component.width >= component.height ? 'horizontal' : 'vertical',
      pixels: component.pixels
    }));
}

function lineCenter(line) {
  return {
    x: line.x + line.width / 2,
    y: line.y + line.height / 2
  };
}

function boxContainsLine(box, line, padding = 12) {
  const center = lineCenter(line);
  return (
    center.x >= box.left - padding &&
    center.x <= box.right + padding &&
    center.y >= box.top - padding &&
    center.y <= box.bottom + padding * 2
  );
}

function nearestCardBoxForLine(line, boxes) {
  const center = lineCenter(line);
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;
  boxes.forEach((box) => {
    const insideBonus = boxContainsLine(box, line, 18) ? -220 : 0;
    const dx = Math.max(box.left - center.x, 0, center.x - box.right);
    const dy = Math.max(box.top - center.y, 0, center.y - box.bottom);
    const score = Math.hypot(dx, dy) + insideBonus;
    if (score < bestScore) {
      bestScore = score;
      best = box;
    }
  });
  return bestScore <= 90 ? best : null;
}

function detectedCardsFromOcrAndImage(lines, cardBoxes) {
  const usedMemberIds = new Set();
  const usedBoxIds = new Set();
  const cards = [];

  lines.forEach((line) => {
    const directMatch = bestMemberForText(line.text, usedMemberIds);
    if (!directMatch) {
      return;
    }
    const box = nearestCardBoxForLine(line, cardBoxes);
    if (!box || usedBoxIds.has(box.id)) {
      return;
    }
    usedMemberIds.add(directMatch.member.id);
    usedBoxIds.add(box.id);
    cards.push({ ...box, member: directMatch.member, source: 'card-name', line });
  });

  if (!cards.length) {
    lines.forEach((line) => {
      const directMatch = bestMemberForText(line.text, usedMemberIds);
      if (!directMatch) {
        return;
      }
      usedMemberIds.add(directMatch.member.id);
      const center = lineCenter(line);
      const width = Math.max(180, line.width * 3.2);
      const height = 78;
      cards.push({
        id: `ocr-${cards.length}`,
        left: center.x - width * 0.58,
        top: center.y - height * 0.42,
        right: center.x + width * 0.42,
        bottom: center.y + height * 0.58,
        width,
        height,
        centerX: center.x - width * 0.08,
        centerY: center.y + height * 0.08,
        member: directMatch.member,
        source: 'ocr-name',
        line
      });
    });
  }

  if (cardBoxes.length) {
    cardBoxes.forEach((box) => {
      if (usedBoxIds.has(box.id)) {
        return;
      }
      const cardLines = lines
        .filter((line) => boxContainsLine(box, line, 18))
        .sort((a, b) => a.y - b.y || a.x - b.x)
        .map((line) => line.text)
        .filter(Boolean);
      const name = cardLines[0] || `Unmatched Person ${cards.length + 1}`;
      const title = cardLines.slice(1, 3).join(' ') || 'Review match';
      const placeholderMember = {
        id: `image-placeholder-${Date.now()}-${cards.length}`,
        name,
        title,
        department: 'Image Import',
        initials: '',
        email: '',
        telephone: '',
        address: '',
        location: '',
        employmentType: '',
        employmentStatus: '',
        performance: '',
        potential: '',
        salary: '',
        budget: '',
        manager: '',
        diversityGroup: '',
        photo: createAvatar(name, cards.length + 1),
        photoFileName: '',
        imagePlaceholder: true
      };
      state.members.push(placeholderMember);
      usedBoxIds.add(box.id);
      cards.push({ ...box, member: placeholderMember, source: 'visual-placeholder' });
    });
  }

  return cards.sort((a, b) => a.top - b.top || a.left - b.left);
}

function rowGroupsFromDetectedPeople(detectedPeople) {
  const sorted = [...detectedPeople].sort((a, b) => a.y - b.y || a.x - b.x);
  const groups = [];
  const tolerance = Math.max(28, Math.round((Math.max(...sorted.map((item) => item.y), 1) || 1) * 0.04));

  sorted.forEach((item) => {
    let group = groups.find((candidate) => Math.abs(candidate.y - item.y) <= tolerance);
    if (!group) {
      group = { y: item.y, items: [] };
      groups.push(group);
    }
    group.items.push(item);
    group.y = group.items.reduce((sum, current) => sum + current.y, 0) / group.items.length;
  });

  return groups
    .sort((a, b) => a.y - b.y)
    .map((group) => group.items.sort((a, b) => a.x - b.x));
}

function applyImageImportStyle() {
  state.settings = normalizeSettings({
    ...state.settings,
    title: '',
    accentColor: '#ed2227',
    headingColor: '#111111',
    cardBg: '#ffffff',
    cardTextColor: '#111111',
    cardSubColor: '#202020',
    outlineColor: '#d8d8d8',
    outlineWidth: 1,
    cardRadius: 0,
    showOutline: true,
    showShadow: false,
    nameSize: 12,
    roleSize: 8,
    nameBold: true,
    cardShape: 'square',
    cardStyle: 'classic',
    cardLayout: 'avatar-left',
    avatarStyle: 'circle',
    cardElevation: 'flat',
    infoVisibility: 'name-role',
    cardWidthScale: 62,
    cardHeightScale: 58,
    connectorStyle: 'orthogonal',
    connectorType: 'solid',
    connectorWeight: 'thin',
    connectorAnimation: 'none',
    cardEntranceAnimation: 'none',
    layoutMode: 'strict',
    structureFreeform: 100,
    symmetryDynamic: 0,
    formalOrganic: 0
  });
  state.autoConnect = false;
  syncControls();
}

function detectedSourceBounds(detectedPeople, imageSize) {
  const minX = Math.min(...detectedPeople.map((item) => item.x));
  const minY = Math.min(...detectedPeople.map((item) => item.y));
  const maxX = Math.max(...detectedPeople.map((item) => item.x + item.width));
  const maxY = Math.max(...detectedPeople.map((item) => item.y + item.height));
  const imageWidth = Math.max(1, Number(imageSize?.width) || maxX || 1);
  const imageHeight = Math.max(1, Number(imageSize?.height) || maxY || 1);
  const width = Math.max(1, maxX - minX);
  const height = Math.max(1, maxY - minY);
  const padX = Math.max(imageWidth * 0.04, width * 0.12);
  const padY = Math.max(imageHeight * 0.04, height * 0.14);

  return {
    left: clamp(minX - padX, 0, imageWidth),
    right: clamp(maxX + padX, 0, imageWidth),
    top: clamp(minY - padY, 0, imageHeight),
    bottom: clamp(maxY + padY, 0, imageHeight)
  };
}

function scaleDetectedPointToCanvas(item, imageSize, sourceBounds) {
  const cardSize = currentCardSize();
  const layerWidth = dom.cardLayer.clientWidth || 1280;
  const layerHeight = dom.cardLayer.clientHeight || 720;
  const imageWidth = Math.max(1, Number(imageSize?.width) || 1);
  const imageHeight = Math.max(1, Number(imageSize?.height) || 1);
  const bounds = sourceBounds || { left: 0, right: imageWidth, top: 0, bottom: imageHeight };
  const sourceWidth = Math.max(1, bounds.right - bounds.left);
  const sourceHeight = Math.max(1, bounds.bottom - bounds.top);
  const paddingX = Math.max(28, cardSize.width / 2 + 14);
  const paddingTop = Math.max(24, cardSize.height / 2 + 10);
  const paddingBottom = Math.max(34, cardSize.height / 2 + 18);
  const sourceX = clamp((item.x + item.width / 2 - bounds.left) / sourceWidth, 0, 1);
  const sourceY = clamp((item.y + item.height / 2 - bounds.top) / sourceHeight, 0, 1);
  const xCenter = paddingX + sourceX * Math.max(1, layerWidth - paddingX * 2);
  const yCenter = paddingTop + sourceY * Math.max(1, layerHeight - paddingTop - paddingBottom);
  return clampManualNodePosition(xCenter, yCenter);
}

function relaxImageImportCollisions(nodeIds) {
  const cardSize = currentCardSize();
  const gapX = Math.max(14, cardSize.width * 0.08);
  const gapY = Math.max(16, cardSize.height * 0.28);

  for (let pass = 0; pass < 10; pass += 1) {
    for (let i = 0; i < nodeIds.length; i += 1) {
      for (let j = i + 1; j < nodeIds.length; j += 1) {
        const a = state.nodes[nodeIds[i]];
        const b = state.nodes[nodeIds[j]];
        if (!a || !b) {
          continue;
        }
        const dx = b.xCenter - a.xCenter;
        const dy = b.yCenter - a.yCenter;
        const overlapX = cardSize.width + gapX - Math.abs(dx);
        const overlapY = cardSize.height + gapY - Math.abs(dy);
        if (overlapX <= 0 || overlapY <= 0) {
          continue;
        }

        if (overlapY <= overlapX) {
          const push = overlapY / 2 + 1;
          const direction = dy >= 0 ? 1 : -1;
          const nextA = clampManualNodePosition(a.xCenter, a.yCenter - push * direction);
          const nextB = clampManualNodePosition(b.xCenter, b.yCenter + push * direction);
          Object.assign(a, nextA);
          Object.assign(b, nextB);
        } else {
          const push = overlapX / 2 + 1;
          const direction = dx >= 0 ? 1 : -1;
          const nextA = clampManualNodePosition(a.xCenter - push * direction, a.yCenter);
          const nextB = clampManualNodePosition(b.xCenter + push * direction, b.yCenter);
          Object.assign(a, nextA);
          Object.assign(b, nextB);
        }
      }
    }
  }
}

function relaxVisualImageImportLayout(nodeIds) {
  const cardSize = currentCardSize();
  const gapX = Math.max(18, cardSize.width * 0.12);
  const gapY = Math.max(18, cardSize.height * 0.2);

  for (let pass = 0; pass < 18; pass += 1) {
    for (let i = 0; i < nodeIds.length; i += 1) {
      for (let j = i + 1; j < nodeIds.length; j += 1) {
        const a = state.nodes[nodeIds[i]];
        const b = state.nodes[nodeIds[j]];
        if (!a || !b) {
          continue;
        }
        const dx = b.xCenter - a.xCenter;
        const dy = b.yCenter - a.yCenter;
        const overlapX = cardSize.width + gapX - Math.abs(dx);
        const overlapY = cardSize.height + gapY - Math.abs(dy);
        if (overlapX <= 0 || overlapY <= 0) {
          continue;
        }

        if (Math.abs(dx) < cardSize.width * 0.72) {
          const push = overlapY / 2 + 2;
          const direction = dy >= 0 ? 1 : -1;
          Object.assign(a, clampManualNodePosition(a.xCenter, a.yCenter - push * direction));
          Object.assign(b, clampManualNodePosition(b.xCenter, b.yCenter + push * direction));
        } else if (overlapY < overlapX) {
          const push = overlapY / 2 + 1;
          const direction = dy >= 0 ? 1 : -1;
          Object.assign(a, clampManualNodePosition(a.xCenter, a.yCenter - push * direction));
          Object.assign(b, clampManualNodePosition(b.xCenter, b.yCenter + push * direction));
        } else {
          const push = overlapX / 2 + 1;
          const direction = dx >= 0 ? 1 : -1;
          Object.assign(a, clampManualNodePosition(a.xCenter - push * direction, a.yCenter));
          Object.assign(b, clampManualNodePosition(b.xCenter + push * direction, b.yCenter));
        }
      }
    }
  }
}

function inferImageManualLinks(nodeIds) {
  const cardSize = currentCardSize();
  const nodes = nodeIds
    .map((nodeId) => state.nodes[nodeId])
    .filter(Boolean)
    .sort((a, b) => a.yCenter - b.yCenter || a.xCenter - b.xCenter);
  const links = [];

  nodes.forEach((child) => {
    let bestParent = null;
    let bestScore = Number.POSITIVE_INFINITY;

    nodes.forEach((candidate) => {
      if (candidate.id === child.id || candidate.yCenter >= child.yCenter - cardSize.height * 0.55) {
        return;
      }

      const dx = Math.abs(candidate.xCenter - child.xCenter);
      const dy = child.yCenter - candidate.yCenter;
      const isNearbyBranch = dy <= cardSize.height * 3.4 && dx <= cardSize.width * 2.4;
      const isVerticalStack = dx <= cardSize.width * 0.72 && dy <= cardSize.height * 5.4;
      if (!isNearbyBranch && !isVerticalStack) {
        return;
      }

      const score = dy + dx * 0.85 + (isVerticalStack ? 0 : cardSize.height * 0.4);
      if (score < bestScore) {
        bestScore = score;
        bestParent = candidate;
      }
    });

    if (bestParent) {
      links.push({ from: bestParent.id, to: child.id, stroke: '#d8d8d8', widthOffset: -1 });
    }
  });

  state.manualLinks = links;
}

function detectedCardSourceBounds(cards, imageSize) {
  const minX = Math.min(...cards.map((card) => card.left));
  const minY = Math.min(...cards.map((card) => card.top));
  const maxX = Math.max(...cards.map((card) => card.right));
  const maxY = Math.max(...cards.map((card) => card.bottom));
  const imageWidth = Math.max(1, Number(imageSize?.width) || maxX || 1);
  const imageHeight = Math.max(1, Number(imageSize?.height) || maxY || 1);
  const width = Math.max(1, maxX - minX);
  const height = Math.max(1, maxY - minY);
  const padX = Math.max(imageWidth * 0.035, width * 0.08);
  const padY = Math.max(imageHeight * 0.035, height * 0.1);

  return {
    left: clamp(minX - padX, 0, imageWidth),
    right: clamp(maxX + padX, 0, imageWidth),
    top: clamp(minY - padY, 0, imageHeight),
    bottom: clamp(maxY + padY, 0, imageHeight)
  };
}

function imageImportTargetFrame(sourceBounds, cards = []) {
  const cardSize = currentCardSize();
  const sourceWidth = Math.max(1, sourceBounds.right - sourceBounds.left);
  const sourceHeight = Math.max(1, sourceBounds.bottom - sourceBounds.top);
  const medianSourceWidth = median(cards.map((card) => card.width).filter((value) => value > 0)) || cardSize.width;
  const medianSourceHeight = median(cards.map((card) => card.height).filter((value) => value > 0)) || cardSize.height;
  const scaleFromCardWidth = (cardSize.width + Math.max(22, cardSize.width * 0.12)) / medianSourceWidth;
  const scaleFromCardHeight = (cardSize.height + Math.max(24, cardSize.height * 0.28)) / medianSourceHeight;
  const importScale = clamp(Math.max(scaleFromCardWidth, scaleFromCardHeight), 0.62, 1.18);
  const targetWidth = Math.max(cardSize.width * 3.4, sourceWidth * importScale);
  const targetHeight = Math.max(cardSize.height * 3.6, sourceHeight * importScale);
  const boardPadX = Math.max(cardSize.width * 2.2, targetWidth * 0.18);
  const boardPadY = Math.max(cardSize.height * 2.8, targetHeight * 0.18);

  ensureCanvasBoardSize(targetWidth + boardPadX * 2, targetHeight + boardPadY * 2);
  const base = canvasBaseSize();
  const centerX = base.width / 2;
  const centerY = base.height / 2;

  return {
    left: centerX - targetWidth / 2,
    top: centerY - targetHeight / 2,
    width: targetWidth,
    height: targetHeight
  };
}

function scaleDetectedCardToCanvas(card, sourceBounds, targetFrame) {
  const sourceWidth = Math.max(1, sourceBounds.right - sourceBounds.left);
  const sourceHeight = Math.max(1, sourceBounds.bottom - sourceBounds.top);
  const xRatio = clamp((card.centerX - sourceBounds.left) / sourceWidth, 0, 1);
  const yRatio = clamp((card.centerY - sourceBounds.top) / sourceHeight, 0, 1);
  const xCenter = targetFrame.left + xRatio * targetFrame.width;
  const yCenter = targetFrame.top + yRatio * targetFrame.height;
  return clampManualNodePosition(xCenter, yCenter);
}

function horizontalOverlapRatio(a, b) {
  const overlap = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  return overlap / Math.max(1, Math.min(a.width, b.width));
}

function visualCardStackGroups(cards) {
  const groups = [];
  [...cards]
    .sort((a, b) => a.centerX - b.centerX || a.top - b.top)
    .forEach((card) => {
      let bestGroup = null;
      let bestScore = Number.POSITIVE_INFINITY;
      groups.forEach((group) => {
        const representative = group[group.length - 1];
        const overlap = horizontalOverlapRatio(representative, card);
        const centerDistance = Math.abs(representative.centerX - card.centerX);
        const sameColumn = overlap > 0.34 || centerDistance <= Math.min(representative.width, card.width) * 0.54;
        if (!sameColumn) {
          return;
        }
        const score = centerDistance - overlap * 40;
        if (score < bestScore) {
          bestScore = score;
          bestGroup = group;
        }
      });

      if (bestGroup) {
        bestGroup.push(card);
      } else {
        groups.push([card]);
      }
    });

  return groups.filter((group) => group.length > 1).map((group) => group.sort((a, b) => a.top - b.top || a.centerX - b.centerX));
}

function enforceVisualStackSpacing(cards, nodeByCardId) {
  const cardSize = currentCardSize();
  const minimumGap = Math.max(22, cardSize.height * 0.32);
  visualCardStackGroups(cards).forEach((group) => {
    const nodes = group.map((card) => state.nodes[nodeByCardId.get(card.id)]).filter(Boolean);
    if (nodes.length < 2) {
      return;
    }

    for (let index = 1; index < nodes.length; index += 1) {
      const previous = nodes[index - 1];
      const node = nodes[index];
      const minimumY = previous.yCenter + cardSize.height + minimumGap;
      if (node.yCenter < minimumY) {
        node.yCenter = minimumY;
      }
    }

    const bounds = canvasBaseSize();
    const lastNode = nodes[nodes.length - 1];
    const overflow = lastNode.yCenter + cardSize.height / 2 + cardSize.height - bounds.height;
    if (overflow > 0) {
      ensureCanvasBoardSize(bounds.width, bounds.height + overflow + cardSize.height * 2);
    }
  });
}

function cardConnectorPortDistance(card, segment) {
  if (segment.orientation === 'horizontal') {
    const yInside = segment.centerY >= card.top - 12 && segment.centerY <= card.bottom + 12;
    const leftGap = Math.abs(segment.right - card.left);
    const rightGap = Math.abs(segment.left - card.right);
    if (yInside) {
      return Math.min(leftGap, rightGap);
    }
    return Math.min(
      Math.hypot(segment.right - card.left, segment.centerY - card.centerY),
      Math.hypot(segment.left - card.right, segment.centerY - card.centerY)
    );
  }

  const xInside = segment.centerX >= card.left - 12 && segment.centerX <= card.right + 12;
  const topGap = Math.abs(segment.bottom - card.top);
  const bottomGap = Math.abs(segment.top - card.bottom);
  if (xInside) {
    return Math.min(topGap, bottomGap);
  }
  return Math.min(
    Math.hypot(segment.centerX - card.centerX, segment.bottom - card.top),
    Math.hypot(segment.centerX - card.centerX, segment.top - card.bottom)
  );
}

function connectorTraceScore(parentCard, childCard, connectorSegments = []) {
  if (!connectorSegments.length) {
    return Number.POSITIVE_INFINITY;
  }
  const bridgeBounds = {
    left: Math.min(parentCard.left, childCard.left) - 28,
    right: Math.max(parentCard.right, childCard.right) + 28,
    top: Math.min(parentCard.top, childCard.top) - 28,
    bottom: Math.max(parentCard.bottom, childCard.bottom) + 28
  };
  const usefulSegments = connectorSegments.filter((segment) => rectsOverlap(segment, bridgeBounds, 8));
  if (!usefulSegments.length) {
    return Number.POSITIVE_INFINITY;
  }

  let parentScore = Number.POSITIVE_INFINITY;
  let childScore = Number.POSITIVE_INFINITY;
  let horizontalRun = 0;
  let verticalRun = 0;
  usefulSegments.forEach((segment) => {
    parentScore = Math.min(parentScore, cardConnectorPortDistance(parentCard, segment));
    childScore = Math.min(childScore, cardConnectorPortDistance(childCard, segment));
    if (segment.orientation === 'horizontal') {
      horizontalRun += segment.width;
    } else {
      verticalRun += segment.height;
    }
  });

  const pathCoverage = horizontalRun + verticalRun;
  const sourceDistance = Math.hypot(childCard.centerX - parentCard.centerX, childCard.centerY - parentCard.centerY);
  const coverageRatio = pathCoverage / Math.max(1, sourceDistance);
  if (parentScore > 80 || childScore > 80 || coverageRatio < 0.18) {
    return Number.POSITIVE_INFINITY;
  }

  return parentScore + childScore - Math.min(160, pathCoverage * 0.12);
}

function inferVisualCardLinks(cards, nodeByCardId, connectorSegments = []) {
  const links = [];
  const seen = new Set();
  const linkedChildren = new Set();
  const sorted = [...cards].sort((a, b) => a.centerY - b.centerY || a.centerX - b.centerX);
  const stackGroups = visualCardStackGroups(cards);

  function addLink(parentCard, childCard) {
    const from = nodeByCardId.get(parentCard.id);
    const to = nodeByCardId.get(childCard.id);
    if (!from || !to || from === to) {
      return;
    }
    const key = `${from}->${to}`;
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    linkedChildren.add(childCard.id);
    links.push({ from, to, stroke: '#d8d8d8', widthOffset: -1 });
  }

  stackGroups.forEach((group) => {
    for (let index = 1; index < group.length; index += 1) {
      addLink(group[index - 1], group[index]);
    }
  });

  stackGroups.forEach((group) => {
    const root = group[0];
    if (linkedChildren.has(root.id)) {
      return;
    }

    let bestParent = null;
    let bestScore = Number.POSITIVE_INFINITY;
    sorted.forEach((candidate) => {
      if (group.includes(candidate)) {
        return;
      }
      const tracedScore = connectorTraceScore(candidate, root, connectorSegments);
      const isLeftBranch = candidate.centerX < root.centerX - root.width * 0.55;
      const isNearbyVertical = Math.abs(candidate.centerY - root.centerY) <= root.height * 4.8;
      const isAboveOrLevel = candidate.centerY <= root.centerY + root.height * 1.3;
      if (!Number.isFinite(tracedScore) && (!isLeftBranch || !isNearbyVertical || !isAboveOrLevel)) {
        return;
      }
      const dx = root.centerX - candidate.centerX;
      const dy = Math.abs(root.centerY - candidate.centerY);
      const score = Number.isFinite(tracedScore) ? tracedScore : dx * 0.38 + dy * 0.86;
      if (score < bestScore) {
        bestScore = score;
        bestParent = candidate;
      }
    });

    if (bestParent) {
      addLink(bestParent, root);
    }
  });

  sorted.forEach((child) => {
    if (linkedChildren.has(child.id)) {
      return;
    }
    let bestParent = null;
    let bestScore = Number.POSITIVE_INFINITY;

    sorted.forEach((candidate) => {
      if (candidate.id === child.id || candidate.centerY >= child.centerY - child.height * 0.35) {
        return;
      }
      const verticalGap = child.top - candidate.bottom;
      if (verticalGap < -candidate.height * 0.2) {
        return;
      }
      const dx = Math.abs(candidate.centerX - child.centerX);
      const overlap = horizontalOverlapRatio(candidate, child);
      const tracedScore = connectorTraceScore(candidate, child, connectorSegments);
      const hasTrace = Number.isFinite(tracedScore);
      const closeStack = overlap > 0.2 && verticalGap <= candidate.height * 2.8;
      const closeBranch = verticalGap <= candidate.height * 2.2 && dx <= candidate.width * 2.4;
      const longImageBranch =
        child.centerX > candidate.centerX + candidate.width * 1.6 &&
        verticalGap <= candidate.height * 4.2 &&
        Math.abs(child.centerY - candidate.centerY) <= candidate.height * 5.2;
      if (!hasTrace && !closeStack && !closeBranch) {
        if (!longImageBranch) {
          return;
        }
      }
      const score = hasTrace
        ? tracedScore
        : Math.max(0, verticalGap) + dx * (overlap > 0.2 ? 0.42 : longImageBranch ? 0.32 : 0.9);
      if (score < bestScore) {
        bestScore = score;
        bestParent = candidate;
      }
    });

    if (bestParent) {
      addLink(bestParent, child);
    }
  });

  state.manualLinks = links;
}

function applyImageDetectedCardsLayout(cards, imageSize = null, connectorSegments = []) {
  clearCanvas();
  applyImageImportStyle();
  const sourceBounds = detectedCardSourceBounds(cards, imageSize);
  const targetFrame = imageImportTargetFrame(sourceBounds, cards);
  const nodeIds = [];
  const nodeByCardId = new Map();
  state.rows = [nodeIds];

  cards.forEach((card) => {
    const nodeId = `n${state.nodeSequence++}`;
    const point = scaleDetectedCardToCanvas(card, sourceBounds, targetFrame);
    state.nodes[nodeId] = {
      id: nodeId,
      memberId: card.member.id,
      manualPosition: true,
      xCenter: point.xCenter,
      yCenter: point.yCenter
    };
    nodeIds.push(nodeId);
    nodeByCardId.set(card.id, nodeId);
  });

  relaxVisualImageImportLayout(nodeIds);
  enforceVisualStackSpacing(cards, nodeByCardId);
  inferVisualCardLinks(cards, nodeByCardId, connectorSegments);
  render({ centerContent: false });
  requestAnimationFrame(() => fitCanvasToContent(rowLayouts(), false));
}

function applyImageDetectedLayout(detectedPeople, imageSize = null) {
  const rowGroups = rowGroupsFromDetectedPeople(detectedPeople);
  clearCanvas();
  applyImageImportStyle();
  state.settings.canvasRowCount = String(Math.max(1, rowGroups.length));
  const sourceBounds = detectedSourceBounds(detectedPeople, imageSize);
  const nodeIds = [];
  state.rows = rowGroups.map((row) =>
    row.map((item) => {
      const nodeId = `n${state.nodeSequence++}`;
      const point = scaleDetectedPointToCanvas(item, imageSize, sourceBounds);
      state.nodes[nodeId] = {
        id: nodeId,
        memberId: item.member.id,
        manualPosition: true,
        xCenter: point.xCenter,
        yCenter: point.yCenter
      };
      nodeIds.push(nodeId);
      return nodeId;
    })
  );
  relaxImageImportCollisions(nodeIds);
  inferImageManualLinks(nodeIds);
  render({ centerContent: false });
  requestAnimationFrame(() => fitCanvasToContent(rowLayouts(), false));
}

async function buildChartFromImage() {
  const file = dom.referenceChartInput?.files?.[0];
  if (!file) {
    notify('Choose a reference org chart image first.');
    return;
  }
  if (!state.members.length) {
    notify('Load the Team Management ZIP before building from an image.');
    return;
  }
  if (!window.Tesseract) {
    notify('Image OCR is still loading. Try again in a moment.');
    return;
  }

  notify('Reading org chart image...');
  removeImagePlaceholderMembers();
  const imageSize = await getImageDimensions(file);
  let imageAnalysis = null;
  let detectedCardBoxes = [];
  let connectorSegments = [];
  try {
    imageAnalysis = await loadImageAnalysisCanvas(file);
    detectedCardBoxes = detectCardBoxesFromImageAnalysis(imageAnalysis);
    connectorSegments = detectConnectorSegmentsFromImageAnalysis(imageAnalysis, detectedCardBoxes);
  } catch (error) {
    console.warn('Could not visually trace chart cards.', error);
  }
  const result = await window.Tesseract.recognize(file, 'eng', {
    logger: (message) => {
      if (message.status === 'recognizing text') {
        notify(`Reading image... ${Math.round((message.progress || 0) * 100)}%`);
      }
    }
  });

  const lines = getOcrLines(result);
  const detectedCards = detectedCardsFromOcrAndImage(lines, detectedCardBoxes);
  if (detectedCards.length) {
    applyImageDetectedCardsLayout(detectedCards, imageSize, connectorSegments);
    const placeholderCount = detectedCards.filter((card) => card.source === 'visual-placeholder').length;
    notify(`Built chart from image: detected ${detectedCardBoxes.length || detectedCards.length} visual cards, generated ${detectedCards.length} cards (${detectedCards.length - placeholderCount} matched, ${placeholderCount} placeholders)${connectorSegments.length ? ` and traced ${connectorSegments.length} connectors` : ''}.`);
    renderLibrary();
    return;
  }

  const usedMemberIds = new Set();
  const detectedPeople = [];

  lines.forEach((line) => {
    const directMatch = bestMemberForText(line.text, usedMemberIds);
    if (directMatch) {
      usedMemberIds.add(directMatch.member.id);
      detectedPeople.push({ ...line, member: directMatch.member, source: 'name' });
    }
  });

  lines.forEach((line) => {
    if (detectedPeople.some((item) => Math.abs(item.x - line.x) < 16 && Math.abs(item.y - line.y) < 16)) {
      return;
    }
    const maybeName = textTokens(line.text).length >= 2;
    if (!maybeName) {
      return;
    }
    const department = inferDepartmentFromNearbyText(line, lines);
    const fallback = fallbackMemberFromDepartment(department, usedMemberIds);
    if (fallback) {
      usedMemberIds.add(fallback.id);
      detectedPeople.push({ ...line, member: fallback, source: 'department' });
    }
  });

  if (!detectedPeople.length) {
    notify('No matching team members found in that image.');
    return;
  }

  applyImageDetectedLayout(detectedPeople, imageSize);
  const exactCount = detectedPeople.filter((item) => item.source === 'name').length;
  const fallbackCount = detectedPeople.length - exactCount;
  notify(`Built chart from image: ${exactCount} name matches, ${fallbackCount} department fallbacks.`);
}

function employeeFieldSettingsFromControls() {
  return {
    name: dom.fieldNameInput?.checked !== false,
    title: dom.fieldTitleInput?.checked !== false,
    department: dom.fieldDepartmentInput?.checked === true,
    telephone: dom.fieldTelephoneInput?.checked === true,
    email: dom.fieldEmailInput?.checked === true,
    address: dom.fieldAddressInput?.checked === true
  };
}

function applyEmployeeFieldsFromControls() {
  state.settings.employeeFields = employeeFieldSettingsFromControls();
  state.settings.infoVisibility = state.settings.employeeFields.department
    ? 'name-role-dept'
    : state.settings.employeeFields.title
      ? 'name-role'
      : 'name-only';
  syncControls();
  render();
  scheduleStatePersistence();
}

function applyOrgChartViewPreset(view) {
  state.settings.orgChartView = view;
  const base = {
    showOrgChartBadges: true,
    showChartLegend: true,
    cardEntranceAnimation: 'none',
    connectorAnimation: 'none'
  };
  const presets = {
    standard: {
      orgChartColorBy: 'none',
      layoutMode: 'strict',
      cardVisualType: 'standard',
      employeeFields: { name: true, title: true, department: false, telephone: false, email: false, address: false, location: false }
    },
    branded: {
      orgChartColorBy: 'department',
      layoutMode: 'symmetrical',
      cardVisualType: 'editorial',
      cardLineStyle: 'solid',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    directory: {
      orgChartColorBy: 'department',
      layoutMode: 'masonry',
      cardVisualType: 'minimal',
      employeeFields: { name: true, title: true, department: true, telephone: true, email: true, address: false, location: true }
    },
    'nine-box': {
      orgChartColorBy: 'performance',
      layoutMode: 'clustered',
      cardVisualType: 'outline',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    span: {
      orgChartColorBy: 'span',
      layoutMode: 'strict',
      cardVisualType: 'standard',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    employment: {
      orgChartColorBy: 'employmentType',
      layoutMode: 'swimlane',
      cardVisualType: 'filled',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    dei: {
      orgChartColorBy: 'diversityGroup',
      layoutMode: 'clustered',
      cardVisualType: 'glass',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: true }
    },
    hybrid: {
      orgChartColorBy: 'location',
      layoutMode: 'swimlane',
      cardVisualType: 'standard',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: true }
    },
    budget: {
      orgChartColorBy: 'budget',
      layoutMode: 'strict',
      cardVisualType: 'outline',
      cardLineStyle: 'double',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    matrix: {
      orgChartColorBy: 'department',
      layoutMode: 'organic',
      connectorStyle: 'stepped',
      connectorType: 'dashed',
      connectorVisualStyle: 'technical',
      cardVisualType: 'split',
      employeeFields: { name: true, title: true, department: true, telephone: false, email: false, address: false, location: false }
    },
    simple: {
      orgChartColorBy: 'none',
      layoutMode: 'strict',
      cardVisualType: 'minimal',
      cardElevation: 'flat',
      showShadow: false,
      cardLineStyle: 'solid',
      cardFillPattern: 'none',
      showOrgChartBadges: false,
      employeeFields: { name: true, title: true, department: false, telephone: false, email: false, address: false, location: false }
    }
  };
  Object.assign(state.settings, base, presets[view] || presets.standard);
  state.settings.infoVisibility = state.settings.employeeFields?.department
    ? 'name-role-dept'
    : state.settings.employeeFields?.title === false
      ? 'name-only'
      : 'name-role';
  syncControls();
  render();
}

function applyFormatNodeStyle(preset) {
  if (preset === 'custom') {
    state.settings.nodeStylePreset = 'custom';
    render();
    return;
  }
  state.settings.nodeStylePreset = preset;
  const presets = {
    'visio-basic': {
      cardVisualType: 'standard',
      cardLayout: 'avatar-left',
      avatarStyle: 'rounded',
      cardElevation: 'flat',
      cardShape: 'rectangle',
      cardRadius: 8,
      showOutline: true,
      showShadow: false
    },
    'visio-compact': {
      cardVisualType: 'minimal',
      cardLayout: 'compact',
      avatarStyle: 'rounded',
      cardElevation: 'flat',
      cardShape: 'rectangle',
      cardRadius: 6,
      cardWidthScale: 82,
      cardHeightScale: 86,
      showOutline: true,
      showShadow: false
    },
    'visio-nameplate': {
      cardVisualType: 'outline',
      cardLayout: 'compact',
      avatarStyle: 'hidden',
      cardElevation: 'flat',
      cardShape: 'square',
      cardRadius: 3,
      cardWidthScale: 76,
      cardHeightScale: 74,
      showOutline: true,
      showShadow: false
    },
    'visio-title-block': {
      cardVisualType: 'split',
      cardLayout: 'avatar-left',
      avatarStyle: 'circle',
      cardElevation: 'soft',
      cardShape: 'rectangle',
      cardRadius: 8,
      cardWidthScale: 96,
      cardHeightScale: 96,
      showOutline: true,
      showShadow: true
    },
    'visio-outline': {
      cardVisualType: 'outline',
      cardLayout: 'avatar-left',
      avatarStyle: 'square',
      cardElevation: 'flat',
      cardShape: 'square',
      cardRadius: 0,
      showOutline: true,
      showShadow: false
    },
    'visio-picture-top': {
      cardVisualType: 'standard',
      cardLayout: 'avatar-top',
      avatarStyle: 'rounded',
      cardElevation: 'soft',
      cardShape: 'rectangle',
      cardRadius: 10,
      showOutline: true,
      showShadow: true
    },
    'teamgen-glass': {
      cardVisualType: 'glass',
      cardLayout: 'avatar-left',
      avatarStyle: 'floating',
      cardElevation: 'glass',
      cardShape: 'tall-badge',
      cardRadius: 18,
      showOutline: true,
      showShadow: true
    },
    'teamgen-filled': {
      cardVisualType: 'filled',
      cardLayout: 'avatar-left',
      avatarStyle: 'circle',
      cardElevation: 'soft',
      cardShape: 'circle',
      cardRadius: 28,
      showOutline: false,
      showShadow: true
    },
    'teamgen-blueprint': {
      cardVisualType: 'blueprint',
      cardLayout: 'compact',
      avatarStyle: 'monochrome',
      cardElevation: 'flat',
      cardShape: 'square',
      cardRadius: 2,
      showOutline: true,
      showShadow: false
    },
    'teamgen-editorial': {
      cardVisualType: 'editorial',
      cardLayout: 'avatar-top',
      avatarStyle: 'full-bleed',
      cardElevation: 'soft',
      cardShape: 'tall-badge',
      cardRadius: 16,
      showOutline: true,
      showShadow: true
    }
  };
  Object.assign(state.settings, { cardWidthScale: 100, cardHeightScale: 100 }, presets[preset] || presets['visio-basic']);
  syncControls();
  render();
}

function normalizeNameForPhotoMatch(value) {
  return slug(String(value || '').replace(/\.[^.]+$/, ''));
}

async function uploadPicturesForMembers(files) {
  const images = Array.from(files || []).filter((file) => /^image\//i.test(file.type) || /\.(png|jpe?g|webp|gif)$/i.test(file.name));
  if (!images.length) {
    notify('Choose one or more image files to upload pictures.');
    return;
  }
  const membersByName = new Map(state.members.map((member) => [normalizeNameForPhotoMatch(member.name), member]));
  let matched = 0;
  for (const file of images) {
    const key = normalizeNameForPhotoMatch(file.name);
    const member = membersByName.get(key);
    if (!member) {
      continue;
    }
    member.photo = await fileToDataUrl(file);
    member.photoFileName = file.name;
    matched += 1;
  }
  renderLibrary();
  render();
  scheduleFullStatePersistence();
  notify(matched ? `Uploaded ${matched} matching member pictures.` : 'No picture filenames matched member names.');
}

function syncControls() {
  populateFontSelectors();
  Object.assign(state.settings, applyCardShapePreset(normalizeCardShapeName(state.settings.cardShape || 'rectangle')));
  const setValue = (input, value) => {
    if (input) {
      input.value = value;
    }
  };
  const setChecked = (input, checked) => {
    if (input) {
      input.checked = checked;
    }
  };
  if (dom.formatDirectionInput) {
    dom.formatDirectionInput.value = state.settings.hierarchyDirection;
  }
  if (dom.formatAdvancedLayoutInput) {
    dom.formatAdvancedLayoutInput.value = state.settings.layoutMode || 'strict';
  }
  if (dom.formatNodeStyleInput) {
    dom.formatNodeStyleInput.value = state.settings.nodeStylePreset || 'visio-basic';
  }
  if (dom.orgChartViewInput) dom.orgChartViewInput.value = state.settings.orgChartView || 'standard';
  if (dom.orgChartColorByInput) dom.orgChartColorByInput.value = state.settings.orgChartColorBy || 'none';
  if (dom.orgChartLegendInput) dom.orgChartLegendInput.checked = state.settings.showOrgChartBadges !== false;
  if (dom.employeePhotosInput) dom.employeePhotosInput.checked = state.settings.employeePhotos !== false;
  if (dom.legendPositionInput) dom.legendPositionInput.value = state.settings.legendPosition || 'top-right';
  if (dom.shapeFillColorInput) dom.shapeFillColorInput.value = state.settings.cardBg;
  if (dom.shapeFillPatternInput) dom.shapeFillPatternInput.value = state.settings.cardFillPattern || 'none';
  if (dom.shapeTextColorInput) dom.shapeTextColorInput.value = state.settings.cardTextColor;
  if (dom.shapeSubTextColorInput) dom.shapeSubTextColorInput.value = state.settings.cardSubColor;
  if (dom.shapeFontInput) dom.shapeFontInput.value = state.settings.cardFont || state.settings.headingFont || 'Arial';
  if (dom.shapeLineColorInput) dom.shapeLineColorInput.value = state.settings.outlineColor;
  if (dom.shapeLineStyleInput) dom.shapeLineStyleInput.value = state.settings.cardLineStyle || 'solid';
  if (dom.shapeLineWeightInput) dom.shapeLineWeightInput.value = String(state.settings.outlineWidth ?? 1);
  if (dom.shapeShadowInput) dom.shapeShadowInput.checked = state.settings.showShadow === true;
  if (dom.shapeShadowIntensityInput) dom.shapeShadowIntensityInput.value = String(state.settings.shadowIntensity ?? 100);
  const fields = state.settings.employeeFields || {};
  if (dom.fieldNameInput) dom.fieldNameInput.checked = fields.name !== false;
  if (dom.fieldTitleInput) dom.fieldTitleInput.checked = fields.title !== false;
  if (dom.fieldDepartmentInput) dom.fieldDepartmentInput.checked = fields.department === true;
  if (dom.fieldTelephoneInput) dom.fieldTelephoneInput.checked = fields.telephone === true;
  if (dom.fieldEmailInput) dom.fieldEmailInput.checked = fields.email === true;
  if (dom.fieldAddressInput) dom.fieldAddressInput.checked = fields.address === true;
  syncTypographyFieldVisibility();
  setValue(dom.hierarchyDirectionInput, state.settings.hierarchyDirection);
  setValue(dom.nodeSpacingInput, state.settings.nodeSpacing);
  setValue(dom.rowCountInput, state.settings.canvasRowCount || 'auto');
  setValue(dom.connectorStyleInput, state.settings.connectorStyle);
  setValue(dom.connectorTypeInput, state.settings.connectorType);
  setValue(dom.connectorColorInput, state.settings.connectorColor || state.settings.accentColor);
  setValue(dom.connectorStartColorInput, state.settings.connectorStartColor || state.settings.connectorColor || state.settings.accentColor);
  setValue(dom.connectorEndColorInput, state.settings.connectorEndColor || state.settings.connectorColor || state.settings.accentColor);
  setValue(dom.connectorWeightInput, String(connectorThicknessValue()));
  if (dom.connectorWeightValue) dom.connectorWeightValue.textContent = `${connectorThicknessValue()} px`;
  setValue(dom.connectorStartPointsInput, state.settings.connectorStartPoint || 'none');
  setValue(dom.connectorMarkersInput, state.settings.connectorEndPoint || 'none');
  setValue(dom.connectorStartMarkerScaleInput, String(state.settings.connectorStartMarkerScale ?? 1));
  if (dom.connectorStartMarkerScaleValue) dom.connectorStartMarkerScaleValue.textContent = `${Number(state.settings.connectorStartMarkerScale ?? 1).toFixed(1)}x`;
  setValue(dom.connectorMarkerScaleInput, String(state.settings.connectorMarkerScale ?? 1));
  if (dom.connectorMarkerScaleValue) dom.connectorMarkerScaleValue.textContent = `${Number(state.settings.connectorMarkerScale ?? 1).toFixed(1)}x`;
  setValue(dom.cardEntranceAnimationInput, state.settings.cardEntranceAnimation || 'none');
  setValue(dom.connectorAnimationInput, state.settings.connectorAnimation || 'none');
  setValue(dom.animationSpeedInput, state.settings.animationSpeed || 'normal');
  setValue(dom.layoutModeInput, state.settings.layoutMode || 'strict');
  setValue(dom.formalOrganicInput, String(state.settings.formalOrganic ?? 20));
  setValue(dom.symmetryDynamicInput, String(state.settings.symmetryDynamic ?? 18));
  setValue(dom.structureFreeformInput, String(state.settings.structureFreeform ?? 14));
  setValue(dom.shadowIntensityInput, String(state.settings.shadowIntensity ?? 100));
  setValue(dom.blurStrengthInput, String(state.settings.blurStrength ?? 10));
  setValue(dom.backgroundDepthInput, String(state.settings.backgroundDepth ?? 24));
  setValue(dom.connectorStartPointsInput, state.settings.connectorStartPoint || 'none');
  setValue(dom.connectorMarkersInput, state.settings.connectorEndPoint || 'none');
  setValue(dom.connectorStartMarkerScaleInput, String(state.settings.connectorStartMarkerScale ?? 1));
  if (dom.connectorStartMarkerScaleValue) dom.connectorStartMarkerScaleValue.textContent = `${Number(state.settings.connectorStartMarkerScale ?? 1).toFixed(1)}x`;
  setValue(dom.cardVisualTypeInput, state.settings.cardVisualType || 'standard');
  setValue(dom.bgColorInput, state.settings.bgColor);
  setChecked(dom.bgGradientEnabledInput, state.settings.bgGradientEnabled === true);
  setValue(dom.bgGradientColor2Input, state.settings.bgGradientColor2 || '#dfe8f3');
  setValue(dom.headingSizeInput, String(state.settings.headingSize));
  if (dom.headingColorInput) dom.headingColorInput.value = state.settings.headingColor;
  setValue(dom.headingFontInput, state.settings.headingFont);
  if (dom.cardFontInput) dom.cardFontInput.value = state.settings.cardFont || state.settings.headingFont || 'Arial';
  setValue(dom.headingLineHeightInput, String(Math.round((state.settings.headingLineHeight || 1.02) * 100)));
  setValue(dom.headingTrackingInput, String(Math.round((state.settings.headingTracking || 0) * 100)));
  setValue(dom.headingWeightInput, String(state.settings.headingWeight || 0));
  setValue(dom.cardBgInput, state.settings.cardBg);
  if (dom.cardTextColorInput) dom.cardTextColorInput.value = state.settings.cardTextColor;
  setValue(dom.nameSizeInput, String(state.settings.nameSize));
  setValue(dom.titleSizeInput, String(state.settings.roleSize));
  setValue(dom.nameLineHeightInput, String(Math.round((state.settings.nameLineHeight || 1.12) * 100)));
  setValue(dom.roleLineHeightInput, String(Math.round((state.settings.roleLineHeight || 1.15) * 100)));
  setValue(dom.nameTrackingInput, String(Math.round((state.settings.nameTracking || 0) * 100)));
  setValue(dom.roleTrackingInput, String(Math.round((state.settings.roleTracking || 0) * 100)));
  setValue(dom.nameWeightInput, String(state.settings.nameWeight || 0));
  setValue(dom.roleWeightInput, String(state.settings.roleWeight || 0));
  if (dom.departmentFontInput) dom.departmentFontInput.value = state.settings.departmentFont || state.settings.cardFont || 'Arial';
  if (dom.departmentColorInput) dom.departmentColorInput.value = state.settings.departmentColor || state.settings.cardSubColor;
  if (dom.departmentWeightInput) dom.departmentWeightInput.value = String(state.settings.departmentWeight || 0);
  if (dom.departmentSizeInput) dom.departmentSizeInput.value = String(state.settings.departmentSize || 12);
  if (dom.departmentSizeValue) dom.departmentSizeValue.textContent = `${Math.round(Number(dom.departmentSizeInput?.value || state.settings.departmentSize || 12))} px`;
  if (dom.departmentLineHeightInput) dom.departmentLineHeightInput.value = String(Math.round((state.settings.departmentLineHeight || 1.12) * 100));
  if (dom.departmentLineHeightValue) dom.departmentLineHeightValue.textContent = `${(Number(dom.departmentLineHeightInput?.value || 112) / 100).toFixed(2)}x`;
  if (dom.emailFontInput) dom.emailFontInput.value = state.settings.emailFont || state.settings.cardFont || 'Arial';
  if (dom.emailColorInput) dom.emailColorInput.value = state.settings.emailColor || state.settings.cardSubColor;
  if (dom.emailWeightInput) dom.emailWeightInput.value = String(state.settings.emailWeight || 0);
  if (dom.emailSizeInput) dom.emailSizeInput.value = String(state.settings.emailSize || 12);
  if (dom.emailSizeValue) dom.emailSizeValue.textContent = `${Math.round(Number(dom.emailSizeInput?.value || state.settings.emailSize || 12))} px`;
  if (dom.emailLineHeightInput) dom.emailLineHeightInput.value = String(Math.round((state.settings.emailLineHeight || 1.12) * 100));
  if (dom.emailLineHeightValue) dom.emailLineHeightValue.textContent = `${(Number(dom.emailLineHeightInput?.value || 112) / 100).toFixed(2)}x`;
  if (dom.locationFontInput) dom.locationFontInput.value = state.settings.locationFont || state.settings.cardFont || 'Arial';
  if (dom.locationColorInput) dom.locationColorInput.value = state.settings.locationColor || state.settings.cardSubColor;
  setValue(dom.cardShapeInput, normalizeCardShapeName(state.settings.cardShape || 'rectangle'));
  setValue(dom.cardLayoutInput, state.settings.cardLayout);
  setValue(dom.avatarStyleInput, state.settings.avatarStyle);
  setValue(dom.cardElevationInput, String(getElevationSliderValue(state.settings.cardElevation)));
  if (dom.cardElevationValue) dom.cardElevationValue.textContent = getElevationPresetLabel(dom.cardElevationInput?.value);
  setChecked(dom.autoConnectToggle, state.autoConnect);
  syncTypographySliderState();
}

function applyPreset(type, keepCurrentTitle = false) {
  const preset = PRESETS[type];
  if (!preset) {
    return;
  }

  const rememberedTitle = state.settings.title;
  state.settings = structuredClone(preset);
  if (keepCurrentTitle) {
    state.settings.title = rememberedTitle;
  }
  syncControls();
  render();
}

function bindControlEvents() {
  dom.memberSearch?.addEventListener('input', renderLibrary);
  dom.memberDepartmentFilter?.addEventListener('change', renderLibrary);
  dom.memberPositionFilter?.addEventListener('change', renderLibrary);
  dom.addMemberBtn?.addEventListener('click', addMemberFromForm);
  dom.cancelEditMemberBtn?.addEventListener('click', () => {
    resetMemberForm();
    notify('Edit canceled.');
  });
  dom.buildFromImageBtn?.addEventListener('click', () => {
    pushCanvasHistory();
    buildChartFromImage().catch((error) => {
      console.error(error);
      notify('Could not build a chart from that image.');
    });
  });
  dom.removeDepartmentBtn?.addEventListener('click', removeDepartment);
  dom.clearLibraryBtn?.addEventListener('click', clearLibraryMembers);
  dom.libraryZipInput?.addEventListener('change', () => {
    const file = dom.libraryZipInput?.files?.[0];
    if (!file) {
      setLibraryUploadStatus('Choose a TeamGen ZIP to load the team library.', 'info');
      return;
    }
    runLibraryZipImport(file);
  });
  dom.loadLibraryZipBtn?.addEventListener('click', () => {
    runLibraryZipImport(dom.libraryZipInput?.files?.[0]);
  });
  dom.removeLibraryZipBtn?.addEventListener('click', removeLibraryZip);

  dom.formatDirectionInput?.addEventListener('change', () => {
    state.settings.hierarchyDirection = dom.formatDirectionInput.value;
    syncControls();
    render();
  });

  dom.formatAdvancedLayoutInput?.addEventListener('change', () => {
    state.settings.layoutMode = dom.formatAdvancedLayoutInput.value;
    syncControls();
    render();
  });

  dom.formatNodeStyleInput?.addEventListener('change', () => {
    applyFormatNodeStyle(dom.formatNodeStyleInput.value);
  });

  dom.formatPictureUploadInput?.addEventListener('change', () => {
    uploadPicturesForMembers(dom.formatPictureUploadInput.files);
  });

  dom.chartLogoInput?.addEventListener('change', async () => {
    const file = dom.chartLogoInput.files?.[0];
    if (!file) {
      return;
    }
    state.settings.chartLogo = await fileToDataUrl(file);
    state.settings.showChartLogo = true;
    syncControls();
    render();
    scheduleStatePersistence();
    notify('Chart logo added.');
  });

  dom.orgChartViewInput?.addEventListener('change', () => {
    applyOrgChartViewPreset(dom.orgChartViewInput.value);
  });

  dom.orgChartColorByInput?.addEventListener('change', () => {
    state.settings.orgChartColorBy = dom.orgChartColorByInput.value;
    syncControls();
    render();
  });

  dom.orgChartLegendInput?.addEventListener('change', () => {
    state.settings.showOrgChartBadges = dom.orgChartLegendInput.checked;
    syncControls();
    render();
  });

  dom.employeePhotosInput?.addEventListener('change', () => {
    state.settings.employeePhotos = dom.employeePhotosInput.checked;
    syncControls();
    render();
  });

  dom.legendPositionInput?.addEventListener('change', () => {
    state.settings.legendPosition = dom.legendPositionInput.value;
    state.settings.showChartLegend = dom.legendPositionInput.value !== 'hidden';
    syncControls();
    render();
  });

  dom.shapeFillColorInput?.addEventListener('input', () => {
    state.settings.cardBg = dom.shapeFillColorInput.value;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.shapeFillPatternInput?.addEventListener('change', () => {
    state.settings.cardFillPattern = dom.shapeFillPatternInput.value;
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.shapeTextColorInput?.addEventListener('input', () => {
    state.settings.cardTextColor = dom.shapeTextColorInput.value;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.headingColorInput?.addEventListener('input', () => {
    state.settings.headingColor = dom.headingColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.cardTextColorInput?.addEventListener('input', () => {
    state.settings.cardTextColor = dom.cardTextColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.shapeSubTextColorInput?.addEventListener('input', () => {
    state.settings.cardSubColor = dom.shapeSubTextColorInput.value;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.departmentColorInput?.addEventListener('input', () => {
    state.settings.departmentColor = dom.departmentColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.emailColorInput?.addEventListener('input', () => {
    state.settings.emailColor = dom.emailColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.locationColorInput?.addEventListener('input', () => {
    state.settings.locationColor = dom.locationColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.shapeFontInput?.addEventListener('change', () => {
    state.settings.cardFont = dom.shapeFontInput.value;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.cardFontInput?.addEventListener('change', () => {
    state.settings.cardFont = dom.cardFontInput.value;
    if (dom.shapeFontInput) dom.shapeFontInput.value = dom.cardFontInput.value;
    scheduleTypographyRefresh();
  });

  dom.shapeLineColorInput?.addEventListener('input', () => {
    state.settings.outlineColor = dom.shapeLineColorInput.value;
    state.settings.showOutline = true;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.shapeLineStyleInput?.addEventListener('change', () => {
    state.settings.cardLineStyle = dom.shapeLineStyleInput.value;
    state.settings.showOutline = dom.shapeLineStyleInput.value !== 'none';
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.shapeLineWeightInput?.addEventListener('input', () => {
    state.settings.outlineWidth = Number(dom.shapeLineWeightInput.value);
    state.settings.showOutline = Number(dom.shapeLineWeightInput.value) > 0;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.shapeShadowInput?.addEventListener('change', () => {
    state.settings.showShadow = dom.shapeShadowInput.checked;
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  dom.shapeShadowIntensityInput?.addEventListener('input', () => {
    state.settings.shadowIntensity = Number(dom.shapeShadowIntensityInput.value);
    state.settings.nodeStylePreset = 'custom';
    scheduleTypographyRefresh();
  });

  [
    dom.fieldNameInput,
    dom.fieldTitleInput,
    dom.fieldDepartmentInput,
    dom.fieldTelephoneInput,
    dom.fieldEmailInput,
    dom.fieldAddressInput
  ].forEach((input) => {
    input?.addEventListener('change', applyEmployeeFieldsFromControls);
  });

  dom.hierarchyDirectionInput?.addEventListener('change', () => {
    state.settings.hierarchyDirection = dom.hierarchyDirectionInput.value;
    syncControls();
    render();
  });

  dom.nodeSpacingInput?.addEventListener('change', () => {
    state.settings.nodeSpacing = dom.nodeSpacingInput.value;
    render();
  });

  dom.rowCountInput?.addEventListener('change', () => {
    state.settings.canvasRowCount = dom.rowCountInput.value;
    render();
  });

  dom.connectorStyleInput?.addEventListener('change', () => {
    state.settings.connectorStyle = dom.connectorStyleInput.value;
    render();
  });

  dom.connectorTypeInput?.addEventListener('change', () => {
    state.settings.connectorType = dom.connectorTypeInput.value;
    render();
  });

  dom.connectorColorInput?.addEventListener('input', () => {
    state.settings.connectorColor = dom.connectorColorInput.value;
    render();
  });

  dom.connectorStartColorInput?.addEventListener('input', () => {
    state.settings.connectorStartColor = dom.connectorStartColorInput.value;
    render();
  });

  dom.connectorEndColorInput?.addEventListener('input', () => {
    state.settings.connectorEndColor = dom.connectorEndColorInput.value;
    render();
  });

  dom.connectorWeightInput?.addEventListener('input', () => {
    state.settings.connectorWeight = Number(dom.connectorWeightInput.value);
    setSliderFill(dom.connectorWeightInput);
    if (dom.connectorWeightValue) dom.connectorWeightValue.textContent = `${state.settings.connectorWeight} px`;
    render();
  });

  dom.connectorStartPointsInput?.addEventListener('change', () => {
    state.settings.connectorStartPoint = dom.connectorStartPointsInput.value;
    render();
  });

  dom.connectorMarkersInput?.addEventListener('change', () => {
    state.settings.connectorEndPoint = dom.connectorMarkersInput.value;
    render();
  });

  dom.connectorStartMarkerScaleInput?.addEventListener('input', () => {
    state.settings.connectorStartMarkerScale = Number(dom.connectorStartMarkerScaleInput.value);
    setSliderFill(dom.connectorStartMarkerScaleInput);
    if (dom.connectorStartMarkerScaleValue) dom.connectorStartMarkerScaleValue.textContent = `${state.settings.connectorStartMarkerScale.toFixed(1)}x`;
    render();
  });

  dom.connectorMarkerScaleInput?.addEventListener('input', () => {
    state.settings.connectorMarkerScale = Number(dom.connectorMarkerScaleInput.value);
    setSliderFill(dom.connectorMarkerScaleInput);
    if (dom.connectorMarkerScaleValue) dom.connectorMarkerScaleValue.textContent = `${state.settings.connectorMarkerScale.toFixed(1)}x`;
    render();
  });

  dom.cardEntranceAnimationInput?.addEventListener('change', () => {
    state.settings.cardEntranceAnimation = dom.cardEntranceAnimationInput.value;
    render();
  });

  dom.connectorAnimationInput?.addEventListener('change', () => {
    state.settings.connectorAnimation = dom.connectorAnimationInput.value;
    render();
  });

  dom.animationSpeedInput?.addEventListener('change', () => {
    state.settings.animationSpeed = dom.animationSpeedInput.value;
    render();
  });

  dom.layoutModeInput?.addEventListener('change', () => {
    state.settings.layoutMode = dom.layoutModeInput.value;
    syncControls();
    render();
  });

  dom.formalOrganicInput?.addEventListener('input', () => {
    state.settings.formalOrganic = Number(dom.formalOrganicInput.value);
    render();
  });

  dom.symmetryDynamicInput?.addEventListener('input', () => {
    state.settings.symmetryDynamic = Number(dom.symmetryDynamicInput.value);
    render();
  });

  dom.structureFreeformInput?.addEventListener('input', () => {
    state.settings.structureFreeform = Number(dom.structureFreeformInput.value);
    render();
  });

  dom.shadowIntensityInput?.addEventListener('input', () => {
    state.settings.shadowIntensity = Number(dom.shadowIntensityInput.value);
    scheduleTypographyRefresh();
  });

  dom.blurStrengthInput?.addEventListener('input', () => {
    state.settings.blurStrength = Number(dom.blurStrengthInput.value);
    scheduleTypographyRefresh();
  });

  dom.backgroundDepthInput?.addEventListener('input', () => {
    state.settings.backgroundDepth = Number(dom.backgroundDepthInput.value);
    scheduleTypographyRefresh();
  });

  dom.cardVisualTypeInput?.addEventListener('change', () => {
    state.settings.cardVisualType = dom.cardVisualTypeInput.value;
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.bgColorInput?.addEventListener('input', () => {
    state.settings.bgColor = dom.bgColorInput.value;
    scheduleTypographyRefresh();
  });

  dom.bgGradientEnabledInput?.addEventListener('change', () => {
    state.settings.bgGradientEnabled = dom.bgGradientEnabledInput.checked;
    render();
  });

  dom.bgGradientColor2Input?.addEventListener('input', () => {
    state.settings.bgGradientColor2 = dom.bgGradientColor2Input.value;
    scheduleTypographyRefresh();
  });

  dom.headingSizeInput?.addEventListener('input', () => {
    state.settings.headingSize = Number(dom.headingSizeInput.value);
    scheduleTypographyRefresh();
  });

  dom.headingFontInput?.addEventListener('change', () => {
    state.settings.headingFont = dom.headingFontInput.value;
    if (dom.cardFontInput) dom.cardFontInput.value = dom.headingFontInput.value;
    if (dom.shapeFontInput) dom.shapeFontInput.value = dom.headingFontInput.value;
    scheduleTypographyRefresh();
  });

  dom.headingWeightInput?.addEventListener('change', () => {
    state.settings.headingWeight = Number(dom.headingWeightInput.value);
    state.settings.headingBold = Number(dom.headingWeightInput.value) >= 700;
    scheduleTypographyRefresh();
  });

  dom.headingLineHeightInput?.addEventListener('input', () => {
    state.settings.headingLineHeight = Number(dom.headingLineHeightInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.headingTrackingInput?.addEventListener('input', () => {
    state.settings.headingTracking = Number(dom.headingTrackingInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.cardBgInput?.addEventListener('input', () => {
    state.settings.cardBg = dom.cardBgInput.value;
    scheduleTypographyRefresh();
  });

  dom.nameSizeInput?.addEventListener('input', () => {
    state.settings.nameSize = Number(dom.nameSizeInput.value);
    scheduleTypographyRefresh();
  });

  dom.titleSizeInput?.addEventListener('input', () => {
    state.settings.roleSize = Number(dom.titleSizeInput.value);
    scheduleTypographyRefresh();
  });

  dom.nameWeightInput?.addEventListener('change', () => {
    state.settings.nameWeight = Number(dom.nameWeightInput.value);
    scheduleTypographyRefresh();
  });

  dom.departmentFontInput?.addEventListener('change', () => {
    state.settings.departmentFont = dom.departmentFontInput.value;
    scheduleTypographyRefresh();
  });

  dom.departmentWeightInput?.addEventListener('change', () => {
    state.settings.departmentWeight = Number(dom.departmentWeightInput.value);
    scheduleTypographyRefresh();
  });

  dom.departmentSizeInput?.addEventListener('input', () => {
    state.settings.departmentSize = Number(dom.departmentSizeInput.value);
    scheduleTypographyRefresh();
  });

  dom.departmentLineHeightInput?.addEventListener('input', () => {
    state.settings.departmentLineHeight = Number(dom.departmentLineHeightInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.emailFontInput?.addEventListener('change', () => {
    state.settings.emailFont = dom.emailFontInput.value;
    scheduleTypographyRefresh();
  });

  dom.emailWeightInput?.addEventListener('change', () => {
    state.settings.emailWeight = Number(dom.emailWeightInput.value);
    scheduleTypographyRefresh();
  });

  dom.emailSizeInput?.addEventListener('input', () => {
    state.settings.emailSize = Number(dom.emailSizeInput.value);
    scheduleTypographyRefresh();
  });

  dom.emailLineHeightInput?.addEventListener('input', () => {
    state.settings.emailLineHeight = Number(dom.emailLineHeightInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.locationFontInput?.addEventListener('change', () => {
    state.settings.locationFont = dom.locationFontInput.value;
    scheduleTypographyRefresh();
  });

  dom.roleWeightInput?.addEventListener('change', () => {
    state.settings.roleWeight = Number(dom.roleWeightInput.value);
    scheduleTypographyRefresh();
  });

  dom.nameLineHeightInput?.addEventListener('input', () => {
    state.settings.nameLineHeight = Number(dom.nameLineHeightInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.roleLineHeightInput?.addEventListener('input', () => {
    state.settings.roleLineHeight = Number(dom.roleLineHeightInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.nameTrackingInput?.addEventListener('input', () => {
    state.settings.nameTracking = Number(dom.nameTrackingInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.roleTrackingInput?.addEventListener('input', () => {
    state.settings.roleTracking = Number(dom.roleTrackingInput.value) / 100;
    scheduleTypographyRefresh();
  });

  dom.cardShapeInput?.addEventListener('change', () => {
    const preset = applyCardShapePreset(dom.cardShapeInput.value);
    Object.assign(state.settings, preset);
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.cardLayoutInput?.addEventListener('change', () => {
    state.settings.cardLayout = dom.cardLayoutInput.value;
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.avatarStyleInput?.addEventListener('change', () => {
    state.settings.avatarStyle = dom.avatarStyleInput.value;
    state.settings.nodeStylePreset = 'custom';
    syncControls();
    render();
  });

  dom.cardElevationInput?.addEventListener('input', () => {
    state.settings.cardElevation = getElevationPresetValue(dom.cardElevationInput.value);
    state.settings.nodeStylePreset = 'custom';
    if (dom.cardElevationValue) dom.cardElevationValue.textContent = getElevationPresetLabel(dom.cardElevationInput.value);
    scheduleTypographyRefresh();
  });

  dom.autoConnectToggle?.addEventListener('change', () => {
    pushCanvasHistory();
    state.autoConnect = dom.autoConnectToggle.checked;
    render();
  });

  dom.undoBtn?.addEventListener('click', undoCanvasChange);
  dom.redoBtn?.addEventListener('click', redoCanvasChange);
  dom.fitAllBtn?.addEventListener('click', () => {
    fitCanvasToContent(rowLayouts(), true);
    scheduleStatePersistence();
    notify('Fit chart to the canvas view.');
  });
  dom.cleanupLayoutBtn?.addEventListener('click', cleanupCanvasLayout);
  dom.toggleMinimapBtn?.addEventListener('click', () => {
    state.showMinimap = state.showMinimap === false;
    updateToolbarViewButtons();
    updateMinimap();
    scheduleStatePersistence();
    notify(state.showMinimap ? 'Mini map shown.' : 'Mini map hidden.');
  });
  dom.toggleLegendBtn?.addEventListener('click', () => {
    const showLegend = state.settings.showChartLegend !== false && state.settings.legendPosition !== 'hidden' && state.settings.orgChartColorBy !== 'none';
    state.settings.showChartLegend = !showLegend;
    if (state.settings.showChartLegend && state.settings.legendPosition === 'hidden') {
      state.settings.legendPosition = 'top-right';
    }
    syncControls();
    render();
    scheduleStatePersistence();
    notify(state.settings.showChartLegend ? 'Legend shown.' : 'Legend hidden.');
  });
  dom.toggleReportCountsBtn?.addEventListener('click', () => {
    state.settings.showReportCountBadge = !state.settings.showReportCountBadge;
    updateToolbarViewButtons();
    render();
    scheduleStatePersistence();
    notify(state.settings.showReportCountBadge ? 'Report counts shown.' : 'Report counts hidden.');
  });
  dom.clearChartBtn?.addEventListener('click', () => {
    if (!state.rows.length && !Object.keys(state.nodes || {}).length) {
      notify('Canvas is already clear.');
      return;
    }
    pushCanvasHistory();
    clearCanvas();
    render();
    scheduleStatePersistence();
    notify('Canvas cleared.');
  });
  dom.clearCanvasBtn?.addEventListener('click', () => openChartSettingsModal('new'));
  dom.saveChartBtn?.addEventListener('click', saveCurrentChart);
  dom.exportChartBtn?.addEventListener('click', exportPng);
  dom.zoomOutBtn?.addEventListener('click', () => zoomBy(-CANVAS_ZOOM_STEP));
  dom.zoomInBtn?.addEventListener('click', () => zoomBy(CANVAS_ZOOM_STEP));
  dom.zoomResetBtn?.addEventListener('click', () => setCanvasZoom(1));
  document.querySelectorAll('.topbar-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.topbarView || 'canvas';
      setTopbarView(view);
      if (view === 'canvas') {
        notify('Canvas workspace active.');
      }
    });
  });
  dom.chartSettingsCloseBtn?.addEventListener('click', closeChartSettingsModal);
  dom.chartSettingsDetailsTab?.addEventListener('click', () => setChartSettingsTab('details'));
  dom.chartSettingsPermissionsTab?.addEventListener('click', () => setChartSettingsTab('permissions'));
  dom.chartPermissionInviteBtn?.addEventListener('click', addChartPermissionFromForm);
  dom.chartSettingsSaveBtn?.addEventListener('click', saveChartSettings);
  dom.chartSettingsModal?.addEventListener('click', (event) => {
    if (event.target === dom.chartSettingsModal) {
      closeChartSettingsModal();
    }
  });
  dom.memberEditCloseBtn?.addEventListener('click', () => {
    resetMemberForm();
    notify('Edit canceled.');
  });
  dom.memberEditModal?.addEventListener('click', (event) => {
    if (event.target === dom.memberEditModal) {
      resetMemberForm();
      notify('Edit canceled.');
    }
  });
  dom.helpBtn?.addEventListener('click', openHelpModal);
  dom.helpCloseBtn?.addEventListener('click', closeHelpModal);
  dom.helpModal?.addEventListener('click', (event) => {
    if (event.target === dom.helpModal) {
      closeHelpModal();
    }
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dom.chartSettingsModal && !dom.chartSettingsModal.hidden) {
      closeChartSettingsModal();
    }
    if (event.key === 'Escape' && dom.helpModal && !dom.helpModal.hidden) {
      closeHelpModal();
    }
    if (event.key === 'Escape' && dom.memberEditModal && !dom.memberEditModal.hidden) {
      resetMemberForm();
    }
    if (event.key === 'Escape') {
      closeExportMenu();
    }
  });

  dom.backgroundImageInput?.addEventListener('change', async () => {
    const file = dom.backgroundImageInput.files[0];
    if (!file) {
      return;
    }
    state.settings.bgImage = await fileToDataUrl(file);
    render();
    notify('Background image applied.');
  });

  dom.exportChartBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleExportMenu();
  });
  dom.exportXlsxBtn?.addEventListener('click', async () => {
    closeExportMenu();
    await exportSpreadsheet();
  });
  dom.exportMenuPngBtn?.addEventListener('click', async () => {
    closeExportMenu();
    await exportPng();
  });
  dom.exportMenuSvgBtn?.addEventListener('click', async () => {
    closeExportMenu();
    await exportSvg();
  });
  dom.exportMenuPptxBtn?.addEventListener('click', async () => {
    closeExportMenu();
    await exportPptx();
  });
  dom.exportMenuPdfBtn?.addEventListener('click', async () => {
    closeExportMenu();
    await exportPdf();
  });
  document.addEventListener('click', (event) => {
    if (!dom.exportMenu || dom.exportMenu.classList.contains('is-hidden')) {
      return;
    }
    if (dom.exportMenu.contains(event.target) || dom.exportChartBtn?.contains(event.target)) {
      return;
    }
    closeExportMenu();
  });
  dom.cardLayer?.addEventListener('dragover', (event) => {
    event.preventDefault();
    updateDragDropGuide(event.clientX, event.clientY);
  });

  dom.cardLayer?.addEventListener('dragleave', () => {
    hideDragDropGuide();
  });

  dom.cardLayer?.addEventListener('drop', (event) => {
    event.preventDefault();
    hideDragDropGuide();
    const memberId = event.dataTransfer.getData('text/member-id');
    if (!memberId) {
      return;
    }

    const { x, y } = layerPointFromClient(event.clientX, event.clientY);
    pushCanvasHistory();
    addNode(memberId, x, y, { persist: false });
    scheduleStatePersistence();
    notify('Card added to canvas.');
  });

  dom.slide?.addEventListener('pointerleave', () => {
    dom.cardLayer.style.transform = 'translate3d(0, 0, 0)';
    dom.connectorLayer.style.transform = 'translate3d(0, 0, 0)';
  });

  let resizeFrame = null;
  window.addEventListener('resize', () => {
    if (resizeFrame) {
      cancelAnimationFrame(resizeFrame);
    }
    resizeFrame = requestAnimationFrame(() => {
      scalePreview();
      refreshCanvas(false, { centerContent: true, smoothCenter: false });
      resizeFrame = null;
    });
  });

  dom.previewHost?.addEventListener('mousedown', (event) => {
    if (event.button !== 1) {
      return;
    }
    event.preventDefault();
    const startX = event.clientX;
    const startY = event.clientY;
    const startScrollLeft = dom.previewHost.scrollLeft;
    const startScrollTop = dom.previewHost.scrollTop;
    dom.previewHost.classList.add('panning');

    const move = (moveEvent) => {
      dom.previewHost.scrollLeft = startScrollLeft - (moveEvent.clientX - startX);
      dom.previewHost.scrollTop = startScrollTop - (moveEvent.clientY - startY);
    };

    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      dom.previewHost.classList.remove('panning');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  });

  dom.previewHost?.addEventListener('scroll', () => updateMinimap(), { passive: true });

  dom.previewHost?.addEventListener(
    'wheel',
    (event) => {
      if (!event.ctrlKey && !event.metaKey) {
        return;
      }
      event.preventDefault();
      const rect = dom.previewHost.getBoundingClientRect();
      const zoom = Math.max(state.canvasZoom || 1, 0.01);
      const anchor = {
        x: (dom.previewHost.scrollLeft + event.clientX - rect.left) / zoom,
        y: (dom.previewHost.scrollTop + event.clientY - rect.top) / zoom
      };
      zoomBy(event.deltaY > 0 ? -CANVAS_ZOOM_STEP : CANVAS_ZOOM_STEP, anchor);
    },
    { passive: false }
  );

  dom.canvasMinimap?.addEventListener('click', (event) => {
    const rect = dom.canvasMinimap.getBoundingClientRect();
    const boardWidth = Math.max(1, dom.cardLayer.clientWidth || 1);
    const boardHeight = Math.max(1, dom.cardLayer.clientHeight || 1);
    const mapScale = Math.min(rect.width / boardWidth, rect.height / boardHeight);
    const renderedWidth = boardWidth * mapScale;
    const renderedHeight = boardHeight * mapScale;
    const offsetX = (rect.width - renderedWidth) / 2;
    const offsetY = (rect.height - renderedHeight) / 2;
    const x = clamp((event.clientX - rect.left - offsetX) / mapScale, 0, boardWidth);
    const y = clamp((event.clientY - rect.top - offsetY) / mapScale, 0, boardHeight);
    const zoom = Math.max(state.canvasZoom || 1, 0.01);
    dom.previewHost.scrollTo({
      left: clamp(x * zoom - dom.previewHost.clientWidth / 2, 0, dom.previewHost.scrollWidth - dom.previewHost.clientWidth),
      top: clamp(y * zoom - dom.previewHost.clientHeight / 2, 0, dom.previewHost.scrollHeight - dom.previewHost.clientHeight),
      behavior: 'smooth'
    });
  });
}

function startCardDrag(event, nodeId) {
  if (event.button !== 0) {
    return;
  }
  event.preventDefault();

  const startClientX = event.clientX;
  const startClientY = event.clientY;
  const card = dom.cardLayer.querySelector(`[data-node-id="${nodeId}"]`);
  const dragStartSnapshot = canvasHistorySnapshot();
  let moved = false;
  let frame = null;
  let ghost = null;

  const moveCardPreview = (dx, dy) => {
    if (!card) {
      return;
    }
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      card.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      frame = null;
    });
  };

  const move = (moveEvent) => {
    const dx = moveEvent.clientX - startClientX;
    const dy = moveEvent.clientY - startClientY;
    if (!moved && Math.hypot(dx, dy) > 8) {
      moved = true;
      state.draggingNodeId = nodeId;
      if (card) {
        card.classList.add('dragging');
        card.classList.add('selected');
        ghost = createDragGhost(card, moveEvent);
        moveDragGhost(ghost, moveEvent.clientX, moveEvent.clientY);
      }
    }
    if (moved) {
      moveCardPreview(dx, dy);
      moveDragGhost(ghost, moveEvent.clientX, moveEvent.clientY);
      updateDragDropGuide(moveEvent.clientX, moveEvent.clientY, nodeId);
    }
  };

  const up = (upEvent) => {
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', up);

    if (frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    if (card) {
      card.classList.remove('dragging');
      card.style.transform = '';
    }
    removeDragGhost(ghost);
    hideDragDropGuide();

    if (!moved) {
      return;
    }

    const { x, y } = layerPointFromClient(upEvent.clientX, upEvent.clientY);
    pushCanvasHistory(dragStartSnapshot);
    placeNodeAtPoint(nodeId, x, y);
    state.draggingNodeId = null;
    refreshCanvas(false);
    scheduleStatePersistence();
    notify('Card moved.');
  };

  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
}

function toFileName(base, extension) {
  const core = slug(state.settings.title || base || 'team-slide');
  return `${core}.${extension}`;
}

async function capturePngDataUrl(options = {}) {
  const transparent = options.transparent === true;
  const pixelRatio = Number.isFinite(Number(options.pixelRatio)) ? Number(options.pixelRatio) : 2;
  const originalBackground = dom.slide.style.background;
  const originalBackgroundImage = dom.slide.style.backgroundImage;
  const originalBackgroundSize = dom.slide.style.backgroundSize;
  const originalBoxShadow = dom.slide.style.boxShadow;
  const originalTransform = dom.slide.style.transform;
  const removeButtons = Array.from(dom.slide.querySelectorAll('.canvas-card-remove-btn'));
  const removeButtonDisplays = removeButtons.map((button) => button.style.display);

  dom.slide.style.transform = 'none';
  if (transparent) {
    dom.slide.style.background = 'transparent';
    dom.slide.style.backgroundImage = 'none';
    dom.slide.style.backgroundSize = 'auto';
    dom.slide.style.boxShadow = 'none';
  }
  removeButtons.forEach((button) => {
    button.style.display = 'none';
  });

  try {
    return await window.htmlToImage.toPng(dom.slide, {
      cacheBust: true,
      pixelRatio,
      backgroundColor: transparent ? 'transparent' : undefined
    });
  } finally {
    dom.slide.style.transform = originalTransform;
    if (transparent) {
      dom.slide.style.background = originalBackground;
      dom.slide.style.backgroundImage = originalBackgroundImage;
      dom.slide.style.backgroundSize = originalBackgroundSize;
      dom.slide.style.boxShadow = originalBoxShadow;
    }
    removeButtons.forEach((button, index) => {
      button.style.display = removeButtonDisplays[index];
    });
  }
}

function resizeDataUrl(dataUrl, maxWidth = 420, maxHeight = 236, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(maxWidth / image.width, maxHeight / image.height, 1);
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    image.onerror = reject;
    image.src = dataUrl;
  });
}

async function createChartThumbnail() {
  const fullDataUrl = await capturePngDataUrl({ pixelRatio: 0.45 });
  return resizeDataUrl(fullDataUrl);
}

function downloadDataUrl(dataUrl, fileName) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}

async function exportPng() {
  try {
    notify('Rendering transparent PNG...');
    const dataUrl = await capturePngDataUrl({ transparent: true });
    downloadDataUrl(dataUrl, toFileName('team-slide', 'png'));
    notify('Transparent PNG exported.');
  } catch (error) {
    console.error(error);
    notify('PNG export failed.');
  }
}

async function exportSpreadsheet() {
  try {
    if (!window.XLSX) {
      notify('Spreadsheet library is not available.');
      return;
    }
    notify('Building spreadsheet...');
    const rows = state.members.map((member) => ({
      Name: member.name || '',
      Title: member.title || '',
      Department: member.department || '',
      Initials: member.initials || '',
      Email: member.email || '',
      PhotoFileName: member.photoFileName || '',
      Tag: member.tag || '',
      Budget: member.budget || ''
    }));
    const chartSummary = [{
      Title: state.settings.title || '',
      CreatedBy: state.chartDetails?.createdBy || '',
      CreatedDate: state.chartDetails?.createdDate || '',
      RowsOnCanvas: state.rows.length,
      MembersInLibrary: state.members.length
    }];
    const workbook = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(chartSummary), 'Chart');
    window.XLSX.utils.book_append_sheet(workbook, window.XLSX.utils.json_to_sheet(rows), 'TeamMembers');
    const arrayBuffer = window.XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    downloadBlob(new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), toFileName('team-slide', 'xlsx'));
    notify('Spreadsheet exported.');
  } catch (error) {
    console.error(error);
    notify('Spreadsheet export failed.');
  }
}

async function exportPdf() {
  try {
    notify('Rendering PDF...');
    const dataUrl = await capturePngDataUrl();
    const pdf = new window.jspdf.jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [1280, 720]
    });
    pdf.addImage(dataUrl, 'PNG', 0, 0, 1280, 720);
    pdf.save(toFileName('team-slide', 'pdf'));
    notify('PDF exported.');
  } catch (error) {
    console.error(error);
    notify('PDF export failed.');
  }
}

async function exportSvg() {
  try {
    notify('Rendering SVG...');
    const clone = dom.slide.cloneNode(true);
    inlineStyles(dom.slide, clone);
    clone.querySelectorAll('.canvas-card-remove-btn').forEach((button) => button.remove());
    const width = dom.slide.clientWidth || 1280;
    const height = dom.slide.clientHeight || 720;
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n  <foreignObject width="100%" height="100%">\n    <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;">\n      ${clone.outerHTML}\n    </div>\n  </foreignObject>\n</svg>`;
    downloadBlob(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }), toFileName('team-slide', 'svg'));
    notify('SVG exported.');
  } catch (error) {
    console.error(error);
    notify('SVG export failed.');
  }
}

async function exportPptx() {
  try {
    if (!window.PptxGenJS) {
      notify('PPTX library is not available.');
      return;
    }
    notify('Rendering PPTX...');
    const dataUrl = await capturePngDataUrl();
    const pptx = new window.PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';
    const slide = pptx.addSlide();
    slide.addImage({ data: dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
    await pptx.writeFile({ fileName: toFileName('team-slide', 'pptx') });
    notify('PPTX exported.');
  } catch (error) {
    console.error(error);
    notify('PPTX export failed.');
  }
}

function inlineStyles(sourceNode, targetNode) {
  const computed = getComputedStyle(sourceNode);
  const styleText = Array.from(computed)
    .map((property) => `${property}:${computed.getPropertyValue(property)};`)
    .join('');
  targetNode.setAttribute('style', styleText);

  const sourceChildren = sourceNode.children;
  const targetChildren = targetNode.children;
  for (let i = 0; i < sourceChildren.length; i += 1) {
    inlineStyles(sourceChildren[i], targetChildren[i]);
  }
}

function exportHtml() {
  try {
    const clone = dom.slide.cloneNode(true);
    inlineStyles(dom.slide, clone);
    clone.querySelectorAll('.canvas-card-remove-btn').forEach((button) => button.remove());

    const html = `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(state.settings.title)}</title>
</head>
<body style="margin:0;background:#121821;display:grid;place-items:center;height:100vh;">
${clone.outerHTML}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = toFileName('team-slide', 'html');
    link.click();
    URL.revokeObjectURL(url);
    notify('HTML exported.');
  } catch (error) {
    console.error(error);
    notify('HTML export failed.');
  }
}

function parsePromptColors(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('blue')) {
    state.settings.accentColor = '#2f66c7';
  }
  if (text.includes('red')) {
    state.settings.accentColor = '#ed2227';
  }
  if (text.includes('gray') || text.includes('grey')) {
    state.settings.bgColor = '#e4e4e4';
  }
  if (text.includes('white background')) {
    state.settings.bgColor = '#ffffff';
  }
}

function membersByPrompt(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('corporate')) {
    return state.members.filter((member) => member.department === 'Corporate Services');
  }
  if (text.includes('construction') && !text.includes('pre construction')) {
    return state.members.filter((member) => member.department === 'Construction');
  }
  if (text.includes('introduction')) {
    return state.members.filter((member) => member.department === 'Introduction');
  }
  if (text.includes('pre construction') || text.includes('estimating')) {
    return state.members.filter((member) => member.department === 'Pre Construction' || member.department === 'Construction');
  }
  return state.members.slice(0, 12);
}

function choosePresetFromPrompt(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('corporate')) {
    return 'corporate';
  }
  if (text.includes('introduction')) {
    return 'introduction';
  }
  if (text.includes('construction') && !text.includes('pre construction')) {
    return 'construction';
  }
  if (text.includes('pre construction') || text.includes('estimating')) {
    return 'preconstruction';
  }
  return state.settings.type;
}

function patternFromPrompt(promptText, count, targetPreset) {
  const text = promptText.toLowerCase();
  if (text.includes('single row')) {
    return [count];
  }
  if (text.includes('two-column') || text.includes('two column')) {
    const pattern = [];
    let remaining = count;
    while (remaining > 0) {
      pattern.push(Math.min(2, remaining));
      remaining -= 2;
    }
    return pattern;
  }
  if (text.includes('top-down') || text.includes('hierarchy')) {
    const pattern = [1];
    let remaining = count - 1;
    while (remaining > 0) {
      const take = Math.min(3, remaining);
      pattern.push(take);
      remaining -= take;
    }
    return pattern;
  }
  if (targetPreset === 'introduction') {
    if (count <= 3) {
      return [count];
    }
    return [Math.min(3, count), Math.max(0, Math.min(4, count - 3)), Math.max(0, count - 7)].filter((value) => value > 0);
  }

  const pattern = [];
  let remaining = count;
  while (remaining > 0) {
    const take = Math.min(3, remaining);
    pattern.push(take);
    remaining -= take;
  }
  return pattern;
}

function layoutMembers(memberIds, pattern) {
  clearCanvas();
  let cursor = 0;
  pattern.forEach((rowSize) => {
    const row = [];
    for (let i = 0; i < rowSize; i += 1) {
      const memberId = memberIds[cursor];
      cursor += 1;
      if (!memberId) {
        continue;
      }
      const nodeId = `n${state.nodeSequence++}`;
      state.nodes[nodeId] = { id: nodeId, memberId };
      row.push(nodeId);
    }
    if (row.length > 0) {
      state.rows.push(row);
    }
  });
  compactRows();
}

function generateFromPrompt() {
  const promptText = dom.aiPrompt.value.trim();
  if (!promptText) {
    notify('Write a prompt first for AI generation.');
    return;
  }

  const targetPreset = choosePresetFromPrompt(promptText);
  applyPreset(targetPreset);
  parsePromptColors(promptText);

  const memberPool = membersByPrompt(promptText);
  const maxCount = Math.min(memberPool.length, targetPreset === 'corporate' ? 8 : targetPreset === 'introduction' ? 10 : 12);
  const selectedMembers = memberPool.slice(0, maxCount).map((member) => member.id);

  const pattern = patternFromPrompt(promptText, selectedMembers.length, targetPreset);
  layoutMembers(selectedMembers, pattern);
  render();

  notify('AI layout generated. You can still drag cards to fine-tune rows.');
}

function scalePreview() {
  applyCanvasZoom(state.canvasZoom);
}

function membersForStorage() {
  return state.members.map((member, index) => {
    const storedPhoto = String(member.photo || '').startsWith('blob:') ? '' : member.photo;
    return {
      ...member,
      photo: storedPhoto || createAvatar(member.name, index + 1)
    };
  });
}

function membersForChartSnapshot() {
  const usedMemberIds = new Set(Object.values(state.nodes).map((node) => node.memberId));
  return membersForStorage().filter((member) => usedMemberIds.has(member.id));
}

function syncChartDetailsInputs() {
  if (!dom.chartSettingsNameInput) {
    return;
  }
  const details = normalizeChartDetails(state.chartDetails);
  dom.chartSettingsNameInput.value = details.name;
  dom.chartSettingsCreatedByInput.value = details.createdBy;
  dom.chartSettingsCreatedDateInput.value = details.createdDate || todayIsoDate();
}

function readChartDetailsInputs() {
  return normalizeChartDetails({
    ...state.chartDetails,
    name: dom.chartSettingsNameInput?.value.trim() || '',
    createdBy: dom.chartSettingsCreatedByInput?.value.trim() || '',
    createdDate: dom.chartSettingsCreatedDateInput?.value || todayIsoDate(),
    permissions: state.chartDetails.permissions
  });
}

function setChartSettingsTab(tabName) {
  const isPermissions = tabName === 'permissions';
  dom.chartSettingsDetailsTab?.classList.toggle('is-active', !isPermissions);
  dom.chartSettingsPermissionsTab?.classList.toggle('is-active', isPermissions);
  dom.chartSettingsDetailsPane?.toggleAttribute('hidden', isPermissions);
  dom.chartSettingsPermissionsPane?.toggleAttribute('hidden', !isPermissions);
}

function renderChartPermissions() {
  if (!dom.chartPermissionsTableBody) {
    return;
  }
  const permissions = state.chartDetails.permissions || [];
  if (!permissions.length) {
    dom.chartPermissionsTableBody.innerHTML = `
      <tr class="permissions-empty-row">
        <td colspan="6">
          <div class="permissions-empty-icon" aria-hidden="true"></div>
          <div class="permissions-empty-title">Nothing found</div>
          <div class="permissions-empty-copy">Add a user above to store invite and access notes with this chart.</div>
        </td>
      </tr>
    `;
    return;
  }

  dom.chartPermissionsTableBody.innerHTML = permissions
    .map(
      (permission) => `
        <tr>
          <td><input type="checkbox" aria-label="Select ${escapeHtml(permission.name || permission.email)}" /></td>
          <td>${escapeHtml(permission.name || 'Unassigned')}</td>
          <td>${escapeHtml(permission.email || '-')}</td>
          <td>${escapeHtml(permission.userType || 'Viewer')}</td>
          <td>${escapeHtml(permission.inviteStatus || 'Pending')}</td>
          <td>
            <span>${escapeHtml(permission.scope || 'Can View')}</span>
            <button class="permission-remove-btn" type="button" data-permission-id="${escapeHtml(permission.id)}">Remove</button>
          </td>
        </tr>
      `
    )
    .join('');

  dom.chartPermissionsTableBody.querySelectorAll('.permission-remove-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.chartDetails.permissions = state.chartDetails.permissions.filter(
        (permission) => permission.id !== button.dataset.permissionId
      );
      renderChartPermissions();
    });
  });
}

function openChartSettingsModal(mode = 'new') {
  if (!dom.chartSettingsModal) {
    return;
  }
  state.chartSettingsMode = mode;
  if (mode === 'new') {
    state.chartDetails = normalizeChartDetails({
      ...state.chartDetails,
      name: dom.chartTitleInput?.value.trim() || state.chartDetails.name || '',
      createdDate: todayIsoDate()
    });
  } else {
    state.chartDetails = normalizeChartDetails(state.chartDetails);
  }
  syncChartDetailsInputs();
  renderChartPermissions();
  setChartSettingsTab('details');
  dom.chartSettingsModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => dom.chartSettingsNameInput?.focus());
}

window.startNewCanvas = () => openChartSettingsModal('new');
window.openChartSettingsModal = openChartSettingsModal;
window.closeChartSettingsModal = closeChartSettingsModal;

function closeChartSettingsModal() {
  if (!dom.chartSettingsModal) {
    return;
  }
  dom.chartSettingsModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function openHelpModal() {
  if (!dom.helpModal) {
    notify('Use the toolbar and Canvas Controls to build and export org charts.');
    return;
  }
  dom.helpModal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeHelpModal() {
  if (!dom.helpModal) {
    return;
  }
  dom.helpModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function addChartPermissionFromForm() {
  const name = dom.chartPermissionNameInput?.value.trim() || '';
  const email = dom.chartPermissionEmailInput?.value.trim() || '';
  if (!name && !email) {
    notify('Add a name or email before adding a permission.');
    return;
  }
  state.chartDetails = readChartDetailsInputs();
  state.chartDetails.permissions = [
    ...(state.chartDetails.permissions || []),
    {
      id: `permission-${Date.now()}`,
      name,
      email,
      userType: dom.chartPermissionUserTypeInput?.value || 'Viewer',
      inviteStatus: email ? 'Ready to invite' : 'Needs email',
      scope: dom.chartPermissionScopeInput?.value || 'Can View'
    }
  ];
  if (dom.chartPermissionNameInput) {
    dom.chartPermissionNameInput.value = '';
  }
  if (dom.chartPermissionEmailInput) {
    dom.chartPermissionEmailInput.value = '';
  }
  renderChartPermissions();
}

function saveChartSettings() {
  state.chartDetails = readChartDetailsInputs();
  if (dom.chartTitleInput && state.chartDetails.name) {
    dom.chartTitleInput.value = state.chartDetails.name;
  }

  if (state.chartSettingsMode === 'new') {
    pushCanvasHistory();
    clearCanvas();
    state.nodeSequence = 1;
    render();
    notify(state.chartDetails.name ? `Started ${state.chartDetails.name}.` : 'Started a new org chart.');
  } else {
    render();
    notify('Chart settings updated.');
  }

  scheduleStatePersistence();
  closeChartSettingsModal();
}

function getChartSnapshot() {
  return {
    members: membersForChartSnapshot(),
    rows: structuredClone(state.rows),
    nodes: structuredClone(state.nodes),
    manualLinks: structuredClone(state.manualLinks),
    nodeSequence: state.nodeSequence,
    settings: structuredClone(state.settings),
    autoConnect: state.autoConnect,
    canvasBoardWidth: state.canvasBoardWidth,
    canvasBoardHeight: state.canvasBoardHeight,
    showMinimap: state.showMinimap !== false,
    chartDetails: structuredClone(state.chartDetails)
  };
}

function compactChartForStorage(chart) {
  const snapshot = chart?.snapshot;
  if (!snapshot?.members || !snapshot?.nodes) {
    return chart;
  }
  const usedMemberIds = new Set(Object.values(snapshot.nodes).map((node) => node.memberId));
  return {
    ...chart,
    thumbnail: chart.thumbnail || '',
    snapshot: {
      ...snapshot,
      members: snapshot.members.filter((member) => usedMemberIds.has(member.id))
    }
  };
}

function persistSavedCharts() {
  try {
    const compactedCharts = state.savedCharts.map(compactChartForStorage);
    localStorage.setItem(CHART_ARCHIVE_KEY, JSON.stringify(compactedCharts));
    state.savedCharts = compactedCharts;
    return true;
  } catch (error) {
    console.warn('Could not save chart archive.', error);
    return false;
  }
}

function restoreSavedCharts() {
  try {
    const stored = localStorage.getItem(CHART_ARCHIVE_KEY);
    state.savedCharts = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(state.savedCharts)) {
      state.savedCharts = [];
    }
  } catch (error) {
    console.error(error);
    state.savedCharts = [];
  }
}

function formatArchiveDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Saved chart';
  }
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderChartArchive() {
  if (!dom.chartArchiveList) {
    return;
  }

  const charts = state.savedCharts
    .slice()
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));

  dom.chartArchiveList.innerHTML = charts.length
    ? charts
        .map((chart) => {
          const owner = chart.owner ? ` · ${escapeHtml(chart.owner)}` : '';
          const thumbnail = chart.thumbnail
            ? `<img class="archive-thumb" src="${chart.thumbnail}" alt="Preview of ${escapeHtml(chart.name)}" />`
            : '<div class="archive-thumb archive-thumb-empty">No preview</div>';
          return `
            <article class="archive-card" data-chart-id="${chart.id}">
              ${thumbnail}
              <div class="archive-card-title">${escapeHtml(chart.name)}</div>
              <div class="archive-card-meta">${formatArchiveDate(chart.updatedAt || chart.createdAt)}${owner} · ${chart.memberCount || 0} cards</div>
              <div class="archive-actions">
                <button class="archive-load-btn" type="button" data-load-chart-id="${chart.id}">Load</button>
                <button class="archive-delete-btn" type="button" data-delete-chart-id="${chart.id}">Delete</button>
              </div>
            </article>
          `;
        })
        .join('')
    : '<div class="library-empty">No saved org charts yet. Use Save Chart above the canvas.</div>';

  dom.chartArchiveList.querySelectorAll('.archive-load-btn').forEach((button) => {
    button.addEventListener('click', () => loadSavedChart(button.dataset.loadChartId));
  });
  dom.chartArchiveList.querySelectorAll('.archive-delete-btn').forEach((button) => {
    button.addEventListener('click', () => deleteSavedChart(button.dataset.deleteChartId));
  });
}
async function saveCurrentChart() {
  const memberCount = Object.keys(state.nodes).length;
  if (!memberCount) {
    notify('Add at least one card before saving this org chart.');
    return;
  }

  const defaultName = `Org Chart ${new Date().toLocaleDateString()}`;
  const detailName = state.chartDetails?.name?.trim() || '';
  const name = dom.chartTitleInput?.value.trim() || detailName || defaultName;  const now = new Date().toISOString();
  state.chartDetails = normalizeChartDetails({
    ...state.chartDetails,
    name
  });
  const chart = {
    id: `chart-${Date.now()}`,
    name: name.trim(),
    owner: state.chartDetails.createdBy || '',    memberCount,
    createdAt: state.chartDetails.createdDate ? new Date(state.chartDetails.createdDate).toISOString() : now,
    updatedAt: now,
    thumbnail: '',
    chartDetails: structuredClone(state.chartDetails),
    snapshot: getChartSnapshot()
  };

  try {
    notify('Saving chart preview...');
    try {
      chart.thumbnail = await createChartThumbnail();
    } catch (thumbnailError) {
      console.warn('Could not create chart thumbnail.', thumbnailError);
    }
    state.savedCharts = [chart, ...state.savedCharts].slice(0, 100);
    const saved = persistSavedCharts();
    if (!saved) {
      throw new Error('Chart archive storage failed.');
    }
    renderChartArchive();
    if (dom.chartTitleInput) {
      dom.chartTitleInput.value = '';
    }
    notify(`Saved ${chart.name} to the chart archive.`);
  } catch (error) {
    console.error(error);
    state.savedCharts = state.savedCharts.filter((item) => item.id !== chart.id);
    notify('Could not save chart. Browser storage may be full.');
  }
}

function normalizeSavedMembers(members) {
  return (members || []).map((member, index) => ({
    ...member,
    photo: String(member.photo || '').startsWith('blob:')
      ? createAvatar(member.name, index + 1)
      : member.photo || createAvatar(member.name, index + 1)
  }));
}

function loadSavedChart(chartId) {
  const chart = state.savedCharts.find((item) => item.id === chartId);
  const snapshot = chart?.snapshot;
  if (!chart || !snapshot) {
    notify('Saved chart could not be loaded.');
    return;
  }

  const snapshotMembers = normalizeSavedMembers(snapshot.members);
  const snapshotMemberIds = new Set(snapshotMembers.map((member) => member.id));
  state.members = [
    ...snapshotMembers,
    ...state.members.filter((member) => !snapshotMemberIds.has(member.id))
  ];
  state.rows = structuredClone(snapshot.rows || []);
  state.nodes = structuredClone(snapshot.nodes || {});
  state.manualLinks = structuredClone(snapshot.manualLinks || []);
  state.selectedCardId = null;
  state.editingMemberId = null;
  state.nodeSequence = snapshot.nodeSequence || Math.max(1, Object.keys(state.nodes).length + 1);
  state.settings = normalizeSettings(snapshot.settings);
  state.autoConnect = snapshot.autoConnect !== false;
  state.canvasBoardWidth = Number(snapshot.canvasBoardWidth) || null;
  state.canvasBoardHeight = Number(snapshot.canvasBoardHeight) || null;
  state.chartDetails = normalizeChartDetails(snapshot.chartDetails || chart.chartDetails || { name: chart.name });
  if (dom.chartTitleInput) {
    dom.chartTitleInput.value = state.chartDetails.name || chart.name || '';
  }
  resetMemberForm();
  renderLibrary();
  syncControls();
  render({ centerContent: true, smoothCenter: false });
  notify(`Loaded ${chart.name} from the chart archive.`);
}

function deleteSavedChart(chartId) {
  const chart = state.savedCharts.find((item) => item.id === chartId);
  if (!chart) {
    return;
  }
  if (!window.confirm(`Delete saved chart "${chart.name}"?`)) {
    return;
  }
  state.savedCharts = state.savedCharts.filter((item) => item.id !== chartId);
  persistSavedCharts();
  renderChartArchive();
  notify(`Deleted ${chart.name} from the chart archive.`);
}

function buildStatePayload(options = {}) {
  const includeMembers = options.includeMembers !== false;
  const payload = {
    rows: state.rows,
    nodes: state.nodes,
    manualLinks: state.manualLinks,
    nodeSequence: state.nodeSequence,
    settings: state.settings,
    autoConnect: state.autoConnect,
    canvasBoardWidth: state.canvasBoardWidth,
    canvasBoardHeight: state.canvasBoardHeight,
    showMinimap: state.showMinimap !== false,
    chartDetails: state.chartDetails
  };
  if (includeMembers) {
    payload.members = membersForStorage();
  } else {
    payload.partial = true;
  }
  return payload;
}

function estimateStoredMemberPhotoChars() {
  return state.members.reduce((total, member) => total + String(member.photo || '').length, 0);
}

function getWindowStatePayload() {
  if (typeof window === 'undefined') {
    return null;
  }
  const raw = window.name || '';
  if (!raw.startsWith(`${WINDOW_STATE_KEY}:`)) {
    return null;
  }
  if (raw.length > MAX_WINDOW_STATE_CHARS) {
    window.name = '';
    return null;
  }
  try {
    return JSON.parse(atob(raw.slice(WINDOW_STATE_KEY.length + 1)));
  } catch (error) {
    console.warn('Could not read window.name state.', error);
    return null;
  }
}

function setWindowStatePayload(payload, serialized = '') {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    const stateString = serialized || JSON.stringify(payload);
    if (stateString.length > MAX_WINDOW_STATE_CHARS) {
      if ((window.name || '').startsWith(`${WINDOW_STATE_KEY}:`)) {
        window.name = '';
      }
      return false;
    }
    window.name = `${WINDOW_STATE_KEY}:${btoa(stateString)}`;
    return true;
  } catch (error) {
    console.warn('Could not write window.name state.', error);
    return false;
  }
}

function encodeStateToHash(payload) {
  try {
    return `${HASH_STATE_PREFIX}${encodeURIComponent(btoa(JSON.stringify(payload)))}`;
  } catch (error) {
    console.warn('Could not encode state for URL hash.', error);
    return '';
  }
}

function decodeStateFromHash() {
  try {
    const hash = typeof location !== 'undefined' ? String(location.hash || '') : '';
    if (!hash.startsWith(HASH_STATE_PREFIX)) {
      return null;
    }
    return JSON.parse(atob(decodeURIComponent(hash.slice(HASH_STATE_PREFIX.length))));
  } catch (error) {
    console.warn('Could not decode state from URL hash.', error);
    return null;
  }
}

function setStateInHash(payload) {
  try {
    if (typeof location === 'undefined') {
      return false;
    }
    const nextHash = encodeStateToHash(payload);
    if (!nextHash) {
      return false;
    }
    location.hash = nextHash.slice(1);
    return true;
  } catch (error) {
    console.warn('Could not write state to URL hash.', error);
    return false;
  }
}

function getStoredStateString() {
  try {
    return typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  } catch (error) {
    console.warn('Could not read localStorage state.', error);
    return null;
  }
}

function setStoredStateString(value) {
  try {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    localStorage.setItem(STORAGE_KEY, value);
    return true;
  } catch (error) {
    console.warn('Could not write localStorage state.', error);
    return false;
  }
}

function getStoredDraftPayload() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(DRAFT_STORAGE_KEY) : null;
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('Could not read local draft state.', error);
    return null;
  }
}

function setStoredDraftPayload(payload) {
  try {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch (error) {
    console.warn('Could not write local draft state.', error);
    return false;
  }
}

async function saveStateToServer(payload) {
  return new Promise((resolve) => {
    try {
      const iframe = document.createElement('iframe');
      iframe.hidden = true;
      iframe.src = `${SERVER_STATE_ENDPOINT}?mode=save&payload=${encodeURIComponent(btoa(JSON.stringify(payload)))}`;
      iframe.onload = () => {
        iframe.remove();
        resolve(true);
      };
      iframe.onerror = () => {
        iframe.remove();
        resolve(false);
      };
      document.body.appendChild(iframe);
    } catch (error) {
      console.warn('Could not save TeamGen state to the local server.', error);
      resolve(false);
    }
  });
}

async function loadStateFromServer() {
  return new Promise((resolve) => {
    try {
      const iframe = document.createElement('iframe');
      iframe.hidden = true;
      iframe.src = `${SERVER_STATE_ENDPOINT}?mode=load&_=${Date.now()}`;
      iframe.onload = () => {
        try {
          const text = iframe.contentDocument?.body?.textContent || '';
          resolve(text ? JSON.parse(text) : null);
        } catch (parseError) {
          console.warn('Could not parse TeamGen state from the local server.', parseError);
          resolve(null);
        } finally {
          iframe.remove();
        }
      };
      iframe.onerror = () => {
        iframe.remove();
        resolve(null);
      };
      document.body.appendChild(iframe);
    } catch (error) {
      console.warn('Could not read TeamGen state from the local server.', error);
      resolve(null);
    }
  });
}

function openStateDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB is not available.'));
      return;
    }
    const request = indexedDB.open(STATE_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STATE_DB_STORE, { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Could not open IndexedDB.'));
  });
}

function withStateStore(mode, action) {
  return openStateDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(STATE_DB_STORE, mode);
        const store = transaction.objectStore(STATE_DB_STORE);
        let request;
        try {
          request = action(store);
        } catch (error) {
          db.close();
          reject(error);
          return;
        }
        transaction.oncomplete = () => {
          db.close();
          resolve(request?.result);
        };
        transaction.onerror = () => {
          db.close();
          reject(transaction.error || request?.error || new Error('IndexedDB transaction failed.'));
        };
      })
  );
}

function saveStateToIndexedDb(payload) {
  return withStateStore('readwrite', (store) => store.put({ id: STATE_DB_KEY, payload, savedAt: Date.now() }));
}

function loadStateFromIndexedDb() {
  return withStateStore('readonly', (store) => store.get(STATE_DB_KEY)).then((record) => record?.payload || null);
}

function markStateStoredInIndexedDb() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ storage: 'indexeddb', savedAt: Date.now() }));
    }
  } catch (error) {
    console.warn('Could not write IndexedDB state marker.', error);
  }
}

let statePersistTimer = null;
let fullStatePersistTimer = null;

function runWhenIdle(callback, timeout = 2000) {
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 0);
  }
}

function persistDraftState() {
  const payload = buildStatePayload({ includeMembers: false });
  return setStoredDraftPayload(payload);
}

function scheduleStatePersistence(delay = 1000) {
  if (statePersistTimer) {
    clearTimeout(statePersistTimer);
  }
  statePersistTimer = setTimeout(() => {
    statePersistTimer = null;
    runWhenIdle(() => persistDraftState(), 1500);
  }, delay);
  return true;
}

function scheduleFullStatePersistence(delay = 1500) {
  if (fullStatePersistTimer) {
    clearTimeout(fullStatePersistTimer);
  }
  fullStatePersistTimer = setTimeout(() => {
    fullStatePersistTimer = null;
    runWhenIdle(() => persistStateAsync({ includeMembers: true }), 2500);
  }, delay);
  return true;
}

async function persistStateAsync(options = {}) {
  const includeMembers = options.includeMembers !== false;
  if (!includeMembers) {
    return persistDraftState();
  }

  const payload = buildStatePayload({ includeMembers: true });
  const hasLargeLibrary = estimateStoredMemberPhotoChars() > MAX_SYNC_STATE_CHARS;
  let serialized = '';

  persistDraftState();

  if (!hasLargeLibrary) {
    serialized = JSON.stringify(payload);
    if (serialized.length <= MAX_SYNC_STATE_CHARS && setStoredStateString(serialized)) {
      setWindowStatePayload(payload, serialized);
      return true;
    }
  }

  try {
    await saveStateToIndexedDb(payload);
    markStateStoredInIndexedDb();
    if (!hasLargeLibrary && serialized) {
      setWindowStatePayload(payload, serialized);
    }
    return true;
  } catch (dbError) {
    console.warn('Could not save TeamGen state to IndexedDB.', dbError);
  }

  if (!hasLargeLibrary && options.allowServerFallback !== false) {
    const serverSaved = await saveStateToServer(payload);
    if (serverSaved) {
      setWindowStatePayload(payload, serialized);
      return true;
    }
  }

  return !hasLargeLibrary && setWindowStatePayload(payload, serialized);
}

function persistState() {
  return scheduleStatePersistence();
}

function applyStatePayload(parsed) {
  if (Array.isArray(parsed.members)) {
    state.members = parsed.members.map((member, index) => ({
      ...member,
      photo: String(member.photo || '').startsWith('blob:')
        ? createAvatar(member.name, index + 1)
        : member.photo || createAvatar(member.name, index + 1)
    }));
  }
  state.rows = Array.isArray(parsed.rows) ? parsed.rows : state.rows;
  state.nodes = parsed.nodes && typeof parsed.nodes === 'object' ? parsed.nodes : state.nodes;
  state.manualLinks = Array.isArray(parsed.manualLinks) ? parsed.manualLinks : state.manualLinks;
  state.selectedCardId = null;
  state.nodeSequence = parsed.nodeSequence || state.nodeSequence || 1;
  if (parsed.settings) {
    state.settings = normalizeSettings(parsed.settings);
  }
  if ('autoConnect' in parsed) {
    state.autoConnect = parsed.autoConnect !== false;
  }
  if ('canvasBoardWidth' in parsed) {
    state.canvasBoardWidth = Number(parsed.canvasBoardWidth) || null;
  }
  if ('canvasBoardHeight' in parsed) {
    state.canvasBoardHeight = Number(parsed.canvasBoardHeight) || null;
  }
  if ('showMinimap' in parsed) {
    state.showMinimap = parsed.showMinimap !== false;
  }
  if (parsed.chartDetails) {
    state.chartDetails = normalizeChartDetails(parsed.chartDetails);
  }
}

function isValidStatePayload(payload, options = {}) {
  if (!payload || !payload.settings) {
    return false;
  }
  if (Array.isArray(payload.members)) {
    return true;
  }
  return options.allowPartial === true && payload.partial === true;
}

async function loadFullStatePayload() {
  const stored = getStoredStateString();
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed?.storage === 'indexeddb') {
        const indexedState = await loadStateFromIndexedDb();
        if (isValidStatePayload(indexedState)) {
          return indexedState;
        }
      } else if (isValidStatePayload(parsed)) {
        return parsed;
      }
    } catch (error) {
      console.warn('Could not parse local state.', error);
    }
  }

  const indexedState = await loadStateFromIndexedDb().catch((error) => {
    console.warn('Could not read IndexedDB state.', error);
    return null;
  });
  if (isValidStatePayload(indexedState)) {
    return indexedState;
  }

  const windowState = getWindowStatePayload();
  if (isValidStatePayload(windowState)) {
    return windowState;
  }

  const serverState = await loadStateFromServer();
  if (isValidStatePayload(serverState)) {
    return serverState;
  }

  return null;
}

async function restoreState() {
  try {
    const fullState = await loadFullStatePayload();
    if (isValidStatePayload(fullState)) {
      applyStatePayload(fullState);
    } else {
      seedInitialLayout();
    }

    const draftState = getStoredDraftPayload();
    if (isValidStatePayload(draftState, { allowPartial: true })) {
      applyStatePayload(draftState);
    }
  } catch (error) {
    console.error(error);
    seedInitialLayout();
  }
}

function seedInitialLayout() {
  state.settings = structuredClone(PRESETS.preconstruction);
  state.members = structuredClone(DEFAULT_MEMBERS);
  state.rows = [];
  state.nodes = {};
  state.manualLinks = [];
  state.nodeSequence = 1;
  state.chartDetails = createDefaultChartDetails();
}

function fitCanvasOnOpen() {
  requestAnimationFrame(() => {
    fitCanvasToContent(rowLayouts(), false);
  });
}

async function boot() {
  await restoreState();
  restoreSavedCharts();
  bindControlEvents();
  renderLibrary();
  renderChartArchive();
  syncControls();
  setTopbarView('canvas');
  if (window.location.hash && window.history?.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  render({ persist: false });
  scalePreview();
  fitCanvasOnOpen();
  notify('Ready. Drag members to build your org chart slide.');
}

boot().catch((error) => {
  console.error(error);
  seedInitialLayout();
  restoreSavedCharts();
  bindControlEvents();
  renderLibrary();
  renderChartArchive();
  syncControls();
  render({ persist: false });
  scalePreview();
  fitCanvasOnOpen();
  notify('Ready. Drag members to build your org chart slide.');
});






