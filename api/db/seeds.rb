# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
venue_list = [
    ['ChIJNaaUKTJ5hYARuFjPenLpgNk', 'Cantina del Sol', '1175 Solano Ave, Albany'],
    ['ChIJiRIjF6Z5j4ARawB5zIoM2U4', 'Villa Del Sol Argentinian Restaurant', '423 Grand Ave, South San Francisco'],
    ['ChIJU2Jy_oh-j4ARC0QcjQ8GvoQ', 'Costa Del Sol', '4423 Mission St, San Francisco']
]

venue_list.each do |place_id, name, vicinity|
    Venue.create( place_id: place_id, name: name, vicinity: vicinity)
end
