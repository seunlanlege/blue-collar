Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :facebook,
    Rails.application.secrets.facebook_key,
    Rails.application.secrets.facebook_secret,
    scope: 'email', provider_ignores_state: true
  )
end
