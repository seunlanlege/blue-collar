ActiveAdmin.register User do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    id_column
    column :email
    column :first_name
    column :last_name
    column :contactable
    column :trade
    column :job_position
    column :provider
    column :referral_code
    column :created_at
    column :updated_at
    actions
  end
end
