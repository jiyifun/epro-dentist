
export const headline = ({ headline }) => headline.headline
export const activeTab = ({headline}) => headline.activeTab

export const cariesList = ({ tooth }) => tooth.cariesList
export const brokenList = ({ tooth }) => tooth.brokenList
export const currentTeeth = ({tooth}) => tooth.currentTeeth
export const currentBlock = ({tooth}) => tooth.currentBlock

export const brushCount = ({questionnaire}) => questionnaire.brushCount
export const isBled = ({questionnaire}) => questionnaire.isBled
export const isLoosen = ({questionnaire}) => questionnaire.isLoosen
export const isCleaned = ({questionnaire}) => questionnaire.isCleaned
export const isUnwell = ({questionnaire}) => questionnaire.isUnwell

export const toothColor = ({condition}) => condition.toothColor
export const isToothOutlook = ({condition}) => condition.isToothOutlook
export const isLost = ({condition}) => condition.isLost
export const isCaries = ({condition}) => condition.isCaries
export const isBroken = ({condition}) => condition.isBroken
export const isWisdomTooth = ({condition}) => condition.isWisdomTooth
export const isOralColor = ({condition}) => condition.isOralColor
export const isOralMucosa = ({condition}) => condition.isOralMucosa
export const toothCount = ({condition}) => condition.toothCount
export const isToothArrange = ({condition}) => condition.isToothArrange

export const lower = ({toothPic}) => toothPic.lower
export const upper = ({toothPic}) => toothPic.upper

export const userId = ({user}) => user.user_id
