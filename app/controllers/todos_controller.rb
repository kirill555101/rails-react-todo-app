# frozen_string_literal: true
class TodosController < ApplicationController
  before_action :check_user_auth

  def check_user_auth
    render json: { error: "You have not been logged", is_logged_in: false } unless @user
  end

  def index
    todos = @user.todos.order('created_at DESC')
    render json: todos
  end

  def create
    todo = @user.todos.create(todo_param)
    todo.save
    render json: todo
  end

  def update
    todo = @user.todos.find(params[:id])
    todo.update(todo_param)
    render json: todo
  end

  def destroy
    todo = @user.todos.find(params[:id])
    todo.destroy
    head :no_content, status: :ok
  end

  private

  def todo_param
    params.require(:todo).permit(:title, :done)
  end
end
