const recentNews = document.querySelector("#recent-news");
const moreNews = document.querySelector("#more-news");
const entries = [...recentNews.children].sort((first, second) =>
  second.querySelector("time").dateTime.localeCompare(first.querySelector("time").dateTime)
);
const recentLimit = 5;

recentNews.append(...entries.slice(0, recentLimit));
if (entries.length > recentLimit) {
  moreNews.querySelector("ul").append(...entries.slice(recentLimit));
  moreNews.hidden = false;
}
