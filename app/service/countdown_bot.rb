class CountdownBot
  attr_reader :message
  FAKERS = %w[
    DrWho
    Friends
    HarryPotter
    HeyArnold
    Hobbit
    HowIMetYourMother
    HitchhikersGuideToTheGalaxy
    LeagueOfLegends
    Matz
    MostInterestingManInTheWorld
    Overwatch
    RickAndMorty
    Robin
    RuPaul
    Seinfeld
    Simpsons
    StarWars
    TheFreshPrinceOfBelAir
    TwinPeaks
    VentureBros
    Witcher
  ].freeze

  def initialize(message = '')
    @message = message.downcase
  end

  def process!
    return unless message.include?('mcd')
    return countdown if asking_for_countdown?
    return richness if asking_for_richness?
  end

  def asking_for_countdown?
    message.include?('countdown')
  end

  def asking_for_richness?
    message.include?('am i rich yet?')
  end

  def countdown
    post("#{days} days, #{hours} hours, #{minutes} minutes, #{seconds} seconds until Vacation!")
  end

  def richness
    post(faker.quote)
  end

  private

  def post(text)
    json_body = {
      bot_id: ENV['groupme_bot'],
      text: text
    }
    HTTP.post(ENV['groupme_endpoint'], json: json_body)
  end

  def faker
    "Faker::#{FAKERS.sample}".constantize
  end

  def diff
    @diff ||= (Time.new(2017, 'aug', 16, 21, 00, 00) - Time.new).to_i
  end

  def days
    diff / (24 * 60 * 60)
  end

  def hours
    diff / (60 * 60) % 24
  end

  def minutes
    diff / 60 % 60
  end

  def seconds
    diff % 60
  end
end
