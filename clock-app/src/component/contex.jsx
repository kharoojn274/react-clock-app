function Context() {
  let time = new Date();

  return (
    <div>
      <p class="fw-semibold lead">
        This is the clock that shows the current time in Pakistan all the time.
      </p>
      <p class="fw-semibold lead">
        The current time of pakistan is {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()} .
      </p>
    </div>
  );
}

export default Context;
