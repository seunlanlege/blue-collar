import React from 'react'
import { TextInput } from 'react-native'

import { TextIconInput } from './form'
import SelectButton from './select-button'
import StarRating from './star-rating'
import CircleRadioButton from './circle-radio-button'

/**
 * This file will contain all the wrappers needed to work with
 * redux-form's `Field` component.
 *
 * This is needed because redux-form injects props to the component
 * that is wrapped by `Field`. It assumes `onChange` is a prop, but
 * react-native has a different API.
 * https://redux-form.com/6.4.3/docs/api/field.md/#input-props
 *
 * Add a `Field` suffix to components to denote that it can be
 * used with redux-form's `Field` component.
 */

export const TextInputField = ({ input, ...props }) => (
  <TextInput onChangeText={input.onChange} {...props} />
)

export const TextIconInputField = ({
  onChange,
  input,
  content,
  fieldName,
  ...props
}) => (
  <TextIconInput
    value={content}
    onChangeText={onChange || input.onChange}
    handleChange={onChange || input.onChange}
    fieldName={fieldName}
    {...props}
  />
)

export const SelectButtonForm = ({ input, ...props }) => (
  <SelectButton inputChange={input.onChange} {...props} />
)

export const StarRatingForm = ({ input, ...props }) => (
  <StarRating handleChange={input.onChange} {...props} />
)

export const CircleRadioButtonForm = ({ input, ...props }) => (
  <CircleRadioButton onSelected={input.onChange} {...props} />
)
