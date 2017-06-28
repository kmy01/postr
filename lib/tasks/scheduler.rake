desc 'Countdown Vacation'
task post_countdown_to_vacation: :environment do
  days_until_vacation = (Time.new(2017, 'aug', 16, 17, 00, 00) - Time.now).to_i / (24 * 60 * 60) + 1
  json_body = {
    bot_id: ENV['groupme_bot'],
    text: days_until_vacation.to_s + ' days until VACATION!'
  }
  HTTP.post(ENV['groupme_endpoint'], json: json_body)
  puts 'posted!'
end
