// friends
export const friendsHeadLine = "Kelly' friends"
export const friendsIntro = "Meet some interesting friends."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Kelly Yang',
    link: { href: 'https://kaili-yang.github.io' },
  },
]