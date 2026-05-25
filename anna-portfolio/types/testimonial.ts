export interface Testimonial {
  id: string
  name: string
  country: string
  countryFlag: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  lessonType: 'russian' | 'romanian'
  avatarUrl?: string
}
