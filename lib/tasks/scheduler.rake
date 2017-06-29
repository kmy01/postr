desc 'Countdown Vacation'
task post_countdown_to_vacation: :environment do
  bot = CountdownBot.new
  bot.countdown
end
