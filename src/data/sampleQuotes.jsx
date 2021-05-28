class SampleQuotes {
  state = {};
  static getLocalData() {
    let localData = [
      {
        q: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        a: "Vince Lombardi",
        h: "<blockquote>&ldquo;Perfection is not attainable, but if we chase perfection we can catch excellence.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>",
      },
      {
        q: "Do Something. If it works, do more of it. If it doesn't, do something else.",
        a: "Franklin D. Roosevelt",
        h: "<blockquote>&ldquo;Do Something. If it works, do more of it. If it doesn't, do something else.&rdquo; &mdash; <footer>Franklin D. Roosevelt</footer></blockquote>",
      },
      {
        q: "True knowledge exists in knowing that you know nothing.",
        a: "Socrates",
        h: "<blockquote>&ldquo;True knowledge exists in knowing that you know nothing.&rdquo; &mdash; <footer>Socrates</footer></blockquote>",
      },
      {
        q: "We turn not older with years but newer every day.",
        a: "Emily Dickinson",
        h: "<blockquote>&ldquo;We turn not older with years but newer every day.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>",
      },
      {
        q: "Outstanding people have one thing in common: an absolute sense of mission.  ",
        a: "Zig Ziglar",
        h: "<blockquote>&ldquo;Outstanding people have one thing in common: an absolute sense of mission.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
      },
      {
        q: "In matters of style, swim with the current; in matters of principle, stand like a rock.",
        a: "Thomas Jefferson",
        h: "<blockquote>&ldquo;In matters of style, swim with the current; in matters of principle, stand like a rock.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
      },
      {
        q: "Great things are done by a series of small things brought together. ",
        a: "Vincent van Gogh",
        h: "<blockquote>&ldquo;Great things are done by a series of small things brought together. &rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>",
      },
      {
        q: "The goal of an artist is to create the definitive work that cannot be surpassed.",
        a: "George Bernard Shaw",
        h: "<blockquote>&ldquo;The goal of an artist is to create the definitive work that cannot be surpassed.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>",
      },
      {
        q: "Life is like underwear, should be changed twice a day.  ",
        a: "Ray Bradbury",
        h: "<blockquote>&ldquo;Life is like underwear, should be changed twice a day.  &rdquo; &mdash; <footer>Ray Bradbury</footer></blockquote>",
      },
      {
        q: "A lie can travel half way around the world while the truth is putting on its shoes.",
        a: "Mark Twain",
        h: "<blockquote>&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>",
      },
      {
        q: "We can see through others only when we can see through ourselves.",
        a: "Bruce Lee",
        h: "<blockquote>&ldquo;We can see through others only when we can see through ourselves.&rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>",
      },
      {
        q: "Sometimes it is harder to deprive oneself of a pain than of a pleasure.",
        a: "F. Scott Fitzgerald",
        h: "<blockquote>&ldquo;Sometimes it is harder to deprive oneself of a pain than of a pleasure.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>",
      },
      {
        q: "The most important thing is to enjoy your life, to be happy, it's all that matters.",
        a: "Audrey Hepburn",
        h: "<blockquote>&ldquo;The most important thing is to enjoy your life, to be happy, it's all that matters.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>",
      },
      {
        q: "Don't give up on your dreams, or your dreams will give up on you.",
        a: "John Wooden",
        h: "<blockquote>&ldquo;Don't give up on your dreams, or your dreams will give up on you.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>",
      },
      {
        q: "Being a good example is the best form of service.",
        a: "Sathya Sai Baba",
        h: "<blockquote>&ldquo;Being a good example is the best form of service.&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>",
      },
      {
        q: "Remain calm, serene, always in command of yourself. You will then find out how easy it is to get along. ",
        a: "Paramahansa Yogananda",
        h: "<blockquote>&ldquo;Remain calm, serene, always in command of yourself. You will then find out how easy it is to get along. &rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>",
      },
      {
        q: "Once you learn to quit, it becomes a habit.",
        a: "Vince Lombardi",
        h: "<blockquote>&ldquo;Once you learn to quit, it becomes a habit.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>",
      },
      {
        q: "Every second you have on this planet is very precious and it's your responsibility that you're happy.",
        a: "Naval Ravikant",
        h: "<blockquote>&ldquo;Every second you have on this planet is very precious and it's your responsibility that you're happy.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>",
      },
      {
        q: "There's no coming to consciousness without pain",
        a: "Carl Jung",
        h: "<blockquote>&ldquo;There's no coming to consciousness without pain&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>",
      },
      {
        q: "Many roads lead to the path, but basically there are only two: reason and practice. ",
        a: "Bodhidharma",
        h: "<blockquote>&ldquo;Many roads lead to the path, but basically there are only two: reason and practice. &rdquo; &mdash; <footer>Bodhidharma</footer></blockquote>",
      },
      {
        q: "The moment you doubt whether you can fly, you cease for ever to be able to do it.",
        a: "James Matthew Barrie",
        h: "<blockquote>&ldquo;The moment you doubt whether you can fly, you cease for ever to be able to do it.&rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>",
      },
      {
        q: "Never confuse a single defeat with a final defeat.",
        a: "F. Scott Fitzgerald",
        h: "<blockquote>&ldquo;Never confuse a single defeat with a final defeat.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>",
      },
      {
        q: "In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing.",
        a: "Theodore Roosevelt",
        h: "<blockquote>&ldquo;In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
      },
      {
        q: "It is during our darkest moments that we must focus to see the light.",
        a: "Aristotle",
        h: "<blockquote>&ldquo;It is during our darkest moments that we must focus to see the light.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
      },
      {
        q: "Fear does not have any special power unless you empower it by submitting to it.",
        a: "Les Brown",
        h: "<blockquote>&ldquo;Fear does not have any special power unless you empower it by submitting to it.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
      },
      {
        q: "There are more people who wish to be loved than there are who are willing to love. ",
        a: "Nicolas Chamfort",
        h: "<blockquote>&ldquo;There are more people who wish to be loved than there are who are willing to love. &rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>",
      },
      {
        q: "Words are the clothing of our thoughts.",
        a: "Jonathan Swift",
        h: "<blockquote>&ldquo;Words are the clothing of our thoughts.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>",
      },
      {
        q: "You don't need anybody to tell you who you are or what you are. You are what you are!",
        a: "John Lennon",
        h: "<blockquote>&ldquo;You don't need anybody to tell you who you are or what you are. You are what you are!&rdquo; &mdash; <footer>John Lennon</footer></blockquote>",
      },
      {
        q: "Everything that is made beautiful and fair and lovely is made for the eye of one who sees.",
        a: "Rumi",
        h: "<blockquote>&ldquo;Everything that is made beautiful and fair and lovely is made for the eye of one who sees.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
      },
      {
        q: "Fear is your worst enemy. Risk is your best friend.",
        a: "Gurbaksh Chahal",
        h: "<blockquote>&ldquo;Fear is your worst enemy. Risk is your best friend.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>",
      },
      {
        q: "Leadership is solving problems",
        a: "Colin Powell",
        h: "<blockquote>&ldquo;Leadership is solving problems&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
      },
      {
        q: "I will not walk backward in life.",
        a: "J.R.R. Tolkien",
        h: "<blockquote>&ldquo;I will not walk backward in life.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>",
      },
      {
        q: "Never lose hope. Storms make people stronger and never last forever.",
        a: "Roy T. Bennett",
        h: "<blockquote>&ldquo;Never lose hope. Storms make people stronger and never last forever.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
      },
      {
        q: "Work out your own salvation. Do not depend on others.",
        a: "Buddha",
        h: "<blockquote>&ldquo;Work out your own salvation. Do not depend on others.&rdquo; &mdash; <footer>Buddha</footer></blockquote>",
      },
      {
        q: "To be truly ignorant, be content with your own knowledge.",
        a: "Zhuangzi",
        h: "<blockquote>&ldquo;To be truly ignorant, be content with your own knowledge.&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>",
      },
      {
        q: "It's not what you pay a man, but what he costs you that counts.",
        a: "Will Rogers",
        h: "<blockquote>&ldquo;It's not what you pay a man, but what he costs you that counts.&rdquo; &mdash; <footer>Will Rogers</footer></blockquote>",
      },
      {
        q: "He is richest who is content with the least, for content is the wealth of nature.",
        a: "Socrates",
        h: "<blockquote>&ldquo;He is richest who is content with the least, for content is the wealth of nature.&rdquo; &mdash; <footer>Socrates</footer></blockquote>",
      },
      {
        q: "He that can have patience can have what he will.",
        a: "Benjamin Franklin ",
        h: "<blockquote>&ldquo;He that can have patience can have what he will.&rdquo; &mdash; <footer>Benjamin Franklin </footer></blockquote>",
      },
      {
        q: "When you are talented you do it whatever it is until your fingers bleed or your eyes are ready to fall out of your head.",
        a: "Stephen King",
        h: "<blockquote>&ldquo;When you are talented you do it whatever it is until your fingers bleed or your eyes are ready to fall out of your head.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>",
      },
      {
        q: "The only people without problems are those in cemeteries.",
        a: "Tony Robbins",
        h: "<blockquote>&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
      },
      {
        q: "The strength of a wall is neither greater nor less than the courage of the men who defend it. ",
        a: "Genghis Khan",
        h: "<blockquote>&ldquo;The strength of a wall is neither greater nor less than the courage of the men who defend it. &rdquo; &mdash; <footer>Genghis Khan</footer></blockquote>",
      },
      {
        q: "I wasn't brave, I just didn't have time to be scared.",
        a: "Amelia Earhart",
        h: "<blockquote>&ldquo;I wasn't brave, I just didn't have time to be scared.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>",
      },
      {
        q: "Not engaging in ignorance is wisdom. ",
        a: "Bodhidharma",
        h: "<blockquote>&ldquo;Not engaging in ignorance is wisdom. &rdquo; &mdash; <footer>Bodhidharma</footer></blockquote>",
      },
      {
        q: "Never put off to tomorrow what you can do to-day.",
        a: "Thomas Jefferson",
        h: "<blockquote>&ldquo;Never put off to tomorrow what you can do to-day.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
      },
      {
        q: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        a: "Steve Jobs",
        h: "<blockquote>&ldquo;Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>",
      },
      {
        q: "The businessman's tool is value.",
        a: "Ayn Rand",
        h: "<blockquote>&ldquo;The businessman's tool is value.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
      },
      {
        q: "The most important single ingredient in the formula of success is knowing how to get along with people.",
        a: "Theodore Roosevelt",
        h: "<blockquote>&ldquo;The most important single ingredient in the formula of success is knowing how to get along with people.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
      },
      {
        q: "If anything is worth doing, do it with all your heart.",
        a: "Buddha",
        h: "<blockquote>&ldquo;If anything is worth doing, do it with all your heart.&rdquo; &mdash; <footer>Buddha</footer></blockquote>",
      },
      {
        q: "A man, as a general rule, owes very little to what he is born with - a man is what he makes of himself.",
        a: "Alexander Graham Bell",
        h: "<blockquote>&ldquo;A man, as a general rule, owes very little to what he is born with - a man is what he makes of himself.&rdquo; &mdash; <footer>Alexander Graham Bell</footer></blockquote>",
      },
      {
        q: "Being entirely honest with oneself is a good exercise.",
        a: "Sigmund Freud",
        h: "<blockquote>&ldquo;Being entirely honest with oneself is a good exercise.&rdquo; &mdash; <footer>Sigmund Freud</footer></blockquote>",
      },
    ];
    return localData;
  }
}

export default SampleQuotes;
