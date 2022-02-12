const initialState = {
    image: null,
    imageName: null,
    height: null,
    width: null,
    showResizeSection: false,
    brightnessSliderValue: 50,
    showSlider: true,
    contrastSliderValue: 50,
    blurSliderValue: 0,
    saturateSliderValue: 50,
    showCropCanvas: false,
    showTextField: false,
    textInput: "",
    inputColor: null,
    textSize: 16,
    downloadImageFlag: false,
    scaleValue: 100,
    showRotateSection: false,
    horizontalFlip: false,
    verticalFlip: false,
    rotateCanvas: 0,
    fineTuneRotate: 0,
    inactValue: 0,
    imgURL: null,
    canvasDivHeight: null,
    canvasDivWidth: null,
    cropDivClickedResizeRegion: false,
    cropDivClickInitialX: null,
    cropDivClickInitialY: null,
    cropDivWidth: 150,
    cropDivHeight: 150,
    cropDivTop: 0,
    cropDivLeft: 0,
    cropImage: false,
    saveTextFlag: false
};

const rootReducer = (state = initialState, action) => {
    if (action.type === "HANDLE_FILE_UPLOAD") {
        return {
            ...state,
            image: action.payload.result,
            imageName: action.payload.fileName,
            errorMessage: "",
            width: action.payload.width || null,
            height: action.payload.height || null,
            cropImage: false,
            cropDivLeft: 0,
            cropDivTop: 0,
            cropDivWidth: state.width * 0.5,
            cropDivHeight: state.height * 0.5
        };
    } else if (action.type === "SET_IMAGE_FROM_WELCOME_SCREEN") {
        return {
            ...state,
            image: action.payload.result,
            imageName: action.payload.fileName,
            errorMessage: "",
            width: null,
            height: null
        };
    } else if (action.type === "SET_WIDTH_AND_HEIGHT") {
        return {
            ...state,
            width: parseInt(action.payload.width),
            height: parseInt(action.payload.height)
        };
    } else if (action.type === "SET_IMAGE_NAME") {
        return {
            ...state,
            imageName: action.payload
        };
    } else if (action.type === "SHOW_RESIZE_SECTION") {
        if (!state.image)
            return {
                ...state,
                showResizeSection: false,
                showSlider: false,
                showCropCanvas: false,
                showTextField: false,
                errorMessage: "Please upload an image first!"
            };
        return {
            ...state,
            showResizeSection: !action.payload,
            showSlider: false,
            showCropCanvas: false,
            showTextField: false,
            showRotateSection: false,
            errorMessage: ""
        };
    } else if (action.type === "SUBMIT_RESIZED_VALUES") {
        if (action.payload.heigth >= window.outerHeight * 0.75) {
            return {
                ...state,
                width: action.payload.width,
                height: action.payload.heigth,
                showResizeSection: false,
                scaleCanvas: true
            };
        } else {
            return {
                ...state,
                width: action.payload.width,
                height: action.payload.heigth,
                showResizeSection: false,
                scaleCanvas: false
            };
        }
    } 

    return state;
};

export default rootReducer;
