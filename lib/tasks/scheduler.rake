desc 'Countdown Vacation'
task post_countdown_to_vacation: :environment do
  diff = (Time.new(2017, 'aug', 16, 21, 00, 00) - Time.new).to_i
  days = diff / (24 * 60 * 60)
  hours = diff / (60 * 60) % 12
  minutes = diff / 60 % 60
  seconds = diff % 60
  json_body = {
    bot_id: ENV['groupme_bot'],
    text: "#{days} days, #{hours} minutes, #{minutes} minutes until Vacation!"
  }
  HTTP.post(ENV['groupme_endpoint'], json: json_body)
end
