class Youtube {
  constructor(key) {
    this.key = key;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
