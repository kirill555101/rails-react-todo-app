# frozen_string_literal: true
class SessionsController < ApplicationController
  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { name: user.name, jwt: token }
    else
      render json: { message: "Email or password are invalid" }
    end
  end

  def register
    user = User.new(
      email: params[:email], name: params[:name], 
      password: params[:password], password_confirmation: params[:another_password]
    )

    if user.save
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { name: user.name, jwt: token }
    else
      render json: { message: user.errors.full_messages }
    end
  end

  def auto_login
    if @user
      render json: { name: @user.name }
    else
      render json: { message: "You have not been logged", is_logged_in: false }
    end
  end
end
