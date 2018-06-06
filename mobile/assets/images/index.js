/* eslint-disable */
const back = require('./back.png')
const backToReview = require('./back-to-review.png')
const bid = require('./bid.png')
const companyIcon = require('./icon-company.png')
const creditCard = require('./credit-card.png')
const comingSoon = require('./coming-soon.png')
const email = require('./email.png')
const facebookIcon = require('./facebook-icon.png')
const hand = require('./hand.png')
const invite = require('./invite.png')
const inviteIcon = require('./icon-invite.png')
const launchLogo = require('./launch-logo.png')
const leftArrow = require('./left-arrow.png')
const locationIcon = require('./icon-location.png')
const locationIconBlue = require('./icon-location-blue.png')
const logo = require('./large-logo.png')
const noResult = require('./no-results.png')
const password = require('./password.png')
const placeholderHat = require('./placeholder-hat.png')
const placeholderShirt = require('./placeholder-shirt.png')
const placeholderSweat = require('./placeholder-sweat.png')
const placeholderTruck = require('./placeholder-truck.png')
const profileIcon = require('./icon-profile.png')
const reward = require('./reward.png')
const rewardIcon = require('./icon-reward.png')
const searchIcon = require('./icon-search.png')
const searchImg = require('./search-img.png')
const searchTextInput = require('./icon-search-textinput.png')
const smallLogo = require('./large-logo.png')
const starIcon = require('./icon-star.png')
const starYellow = require('./star-yellow.png')
const starYellowIcon = require('./star-yellow-small.png')
const tradeIcon = require('./icon-trade.png')
const tradePlumberIcon = require('./256-trade-plumber.png')

const carpenter = require('./trade/carpenter.png')
const cleanoutsDemolition = require('./trade/cleanouts_demolition.png')
const electrician = require('./trade/electrician.png')
const engineerArchitect = require('./trade/engineer_architect.png')
const fence = require('./trade/fence.png')
const flooringTile = require('./trade/flooring_tile.png')
const framer = require('./trade/framer.png')
const generalContractor = require('./trade/general_contractor.png')
const gutter = require('./trade/gutter.png')
const hvac = require('./trade/hvac.png')
const landscaping = require('./trade/landscaping.png')
const mason = require('./trade/mason.png')
const movers = require('./trade/movers.png')
const oilTruck = require('./trade/oil_truck.png')
const other = require('./trade/other.png')
const painter = require('./trade/painter.png')
const plastererDrywall = require('./trade/plasterer_drywall.png')
const plumber = require('./trade/plumber.png')
const roofer = require('./trade/roofer.png')
const treeServices = require('./trade/tree_services.png')

const tradeCarpenter = require('./clear-trade-icons/carpenter.png')
const tradeDemolition = require('./clear-trade-icons/cleanouts-demolition.png')
const tradeElectrician = require('./clear-trade-icons/electrician.png')
const tradeGeneralContractor = require('./clear-trade-icons/general-contractor.png')
const tradeGutter = require('./clear-trade-icons/gutter.png')
const tradeFence = require('./clear-trade-icons/fence.png')
const tradeFramer = require('./clear-trade-icons/framer.png')
const tradeFlooringTile = require('./clear-trade-icons/flooring-tile.png')
const tradeHvac = require('./clear-trade-icons/hvac.png')
const tradeLandscaping = require('./clear-trade-icons/landscaping.jpg')
const tradeMason = require('./clear-trade-icons/mason.png')
const tradeMovers = require('./clear-trade-icons/movers.png')
const tradePlastererDrywall = require('./clear-trade-icons/plasterer-drywall.png')
const tradePlumber = require('./clear-trade-icons/plumber.png')
const tradePainter = require('./clear-trade-icons/painter.png')
const tradeRoofer = require('./clear-trade-icons/roofer.png')
const tradeTreeServices = require('./clear-trade-icons/tree-services.png')

const rewardHat = require('./reward/hat.png')
const rewardDeWaltPowerstation = require('./reward/DeWalt-powerstation.png')
const rewardHomeDepot = require('./reward/HomeDepot.png')
const rewardDeWaltToolkit = require('./reward/DeWalt-toolkit.png')
const rewardMilwaukeeToolkit = require('./reward/Milwaukee-toolkit.png')
const rewardDeckedStorage = require('./reward/decked-storage.png')
const rewardGreenEgg = require('./reward/green-egg.png')

const triangleIcon = require('./icon-triangle.png')
const userIcon = require('./icon-user.png')
const writeReviewIcon = require('./icon-write-review.png')

const tradeToImage = trade => {
  const img = TRADE_TO_IMAGE[trade]

  return img ? img : other
}

const TRADE_TO_IMAGE = {
  carpenter: carpenter,
  cleanouts_demolition: cleanoutsDemolition,
  electrician: electrician,
  engineer_architect: engineerArchitect,
  fence: fence,
  flooring_tile: flooringTile,
  framer: framer,
  general_contractor: generalContractor,
  hvac: hvac,
  landscaping: landscaping,
  mason: mason,
  movers: movers,
  oil_delivery: oilTruck,
  other: other,
  painter: painter,
  plasterer_or_drywall: plastererDrywall,
  plumber: plumber,
  roofer: roofer,
  tree_services: treeServices,
}

export default {
  back,
  backToReview,
  bid,
  creditCard,
  comingSoon,
  companyIcon,
  email,
  facebookIcon,
  hand,
  invite,
  inviteIcon,
  launchLogo,
  leftArrow,
  locationIcon,
  locationIconBlue,
  logo,
  noResult,
  password,
  placeholderHat,
  placeholderShirt,
  placeholderSweat,
  placeholderTruck,
  profileIcon,
  reward,
  rewardIcon,
  searchIcon,
  searchImg,
  searchTextInput,
  smallLogo,
  starIcon,
  starYellow,
  starYellowIcon,
  tradeIcon,
  tradePlumberIcon,

  tradeToImage,

  tradeCarpenter,
  tradeDemolition,
  tradeElectrician,
  tradeGeneralContractor,
  tradeGutter,
  tradeFence,
  tradeFramer,
  tradeFlooringTile,
  tradeHvac,
  tradeLandscaping,
  tradeMason,
  tradeMovers,
  tradePlastererDrywall,
  tradePlumber,
  tradePainter,
  tradeRoofer,
  tradeTreeServices,

  rewardHat,
  rewardDeWaltPowerstation,
  rewardHomeDepot,
  rewardDeWaltToolkit,
  rewardMilwaukeeToolkit,
  rewardDeckedStorage,
  rewardGreenEgg,

  triangleIcon,
  userIcon,
  writeReviewIcon,
}
