import { createSelector } from 'reselect'

const getReviewReducer = state => state.review

export const getReview = createSelector(
  getReviewReducer,
  state => state.reviews,
)

export const getLoading = createSelector(
  getReviewReducer,
  state => state.loading,
)
