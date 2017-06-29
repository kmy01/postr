class CountdownController < ApplicationController
  def countdown
    logger.info params
    json_body = {
      bot_id: ENV['groupme_bot'],
      text: "I received it!"
    }
    HTTP.post(ENV['groupme_endpoint'], json: json_body)
  end
end
