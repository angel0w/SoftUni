function gramophone(band, album, song) {
  let time = (band.length * album.length * song.length) / 2;
  let rotation = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
// gramophone('Rammstein', 'Sehnsucht', 'Engel');
