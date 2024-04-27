const roomRates = {
    deluxe: 100,
    suite: 150,
    ac: 20,
    locker: 10,
  };
  
  const extraPersonCharge = 1000;
  
  function calculateTotal() {
    const name = document.getElementById("name").value;
    const checkIn = document.getElementById("checkIn").value;
    const totalDays = parseInt(document.getElementById("totalDays").value);
    const totalPersons = parseInt(document.getElementById("totalPersons").value) || 1;
    const roomType = document.getElementById("roomType").value;
    const amenities = document.querySelectorAll('input[name="amenities[]"]:checked');
    let
  }  