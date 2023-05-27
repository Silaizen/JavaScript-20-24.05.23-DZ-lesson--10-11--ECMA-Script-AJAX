class ExtendedDate extends Date {
    getDateText() {
      const months = [
        "січня", "лютого", "березня", "квітня",
        "травня", "червня", "липня", "серпня",
        "вересня", "жовтня", "листопада", "грудня"
      ];
      const day = this.getDate();
      const month = this.getMonth() + 1; 
      return `${day} ${months[month - 1]}`;
    }

    isFutureOrCurrent() {
      const currentDate = new Date().setUTCHours(0, 0, 0, 0); 
      const selectedDate = new Date(this.toISOString().slice(0, 10)).setUTCHours(0, 0, 0, 0); 
      return selectedDate >= currentDate;
    }

    isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
      const nextDate = new Date(this.getTime());
      nextDate.setDate(this.getDate() + 1);
      return nextDate;
    }
  }

  function updateExtendedDate() {
    const dateInput = document.getElementById("dateInput").value;
    const selectedDate = new Date(dateInput);

    const extendedDate = new ExtendedDate(selectedDate);

    const dateTextBlock = document.getElementById("dateText");
    dateTextBlock.textContent = `Дата: ${extendedDate.getDateText()}`;

    const isFutureOrCurrentBlock = document.getElementById("isFutureOrCurrent");
    isFutureOrCurrentBlock.textContent = `Минула(false), поточна-майбутня(true) дата: ${extendedDate.isFutureOrCurrent()}`;

    const isLeapYearBlock = document.getElementById("isLeapYear");
    isLeapYearBlock.textContent = `Високосний рік: ${extendedDate.isLeapYear()}`;

    const nextDateBlock = document.getElementById("nextDate");
    nextDateBlock.textContent = `Наступна дата: ${extendedDate.getNextDate()}`;
  }