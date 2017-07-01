class CountdownController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :verify_token

  def countdown
    bot = CountdownBot.new(params[:text])
    bot.process!
  end

  private

  def verify_token
    params[:token] == ENV['token']
  end
end
