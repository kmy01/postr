json.array! @likes do |like|
  json.partial! 'like', like: like
end
