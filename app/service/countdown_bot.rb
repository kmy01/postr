class CountdownBot
  attr_reader :message

  def initialize(message = nil)
    @message = message
  end

  def asking_for_countdown?
    message.downcase.include?('mcd') && message.downcase.include?('countdown')
  end

  def countdown
    diff = (Time.new(2017, 'aug', 16, 21, 00, 00) - Time.new).to_i
    days = diff / (24 * 60 * 60)
    hours = diff / (60 * 60) % 24
    minutes = diff / 60 % 60
    seconds = diff % 60
    json_body = {
      bot_id: ENV['groupme_bot'],
      text: "#{days} days, #{hours} hour, #{minutes} minutes, #{seconds} seconds until Vacation!"
    }
    HTTP.post(ENV['groupme_endpoint'], json: json_body)
  end
end
