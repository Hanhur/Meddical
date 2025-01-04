import bookVector from "../../images/book-vector.svg"
import "./bookAppointment.css";

export function getBookAppointment()
{
    const section = document.createElement("section");
    section.className = "section-book";

    const container = document.createElement("div");
    container.className = "container";

    const bookAppointmentBlock = document.createElement("div");
    bookAppointmentBlock.className = "book-appointment";
    bookAppointmentBlock.innerHTML = `
        <div class="book-appointment-block">
            <h2 class="book-appointment-title">Book an Appointment</h2>
            <p class="book-appointment-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
        </div>
        <div class="book-appointment-box">
            <form class="book-appointment-form">
                <div class="book-appointment_box">
                    <input class="book-appointment-input" type="text" placeholder="Name">
                </div>
                <div class="book-appointment_box">
                    <button class="book-appointment_btn" type="button">Gender
                        <img class="book-appointment-img" src="${bookVector}" alt="Vector">
                    </button>
                </div>
                <div class="book-appointment_box">
                    <input class="book-appointment-input" type="text" placeholder="Email">
                </div>
                <div class="book-appointment_box">
                    <input class="book-appointment-input" type="text" placeholder="Phone">
                </div>
                <div class="book-appointment_box">
                    <button class="book-appointment_btn" type="button">Data
                        <img class="book-appointment-img" src="${bookVector}" alt="Vector">
                    </button>
                </div>
                <div class="book-appointment_box">
                    <button class="book-appointment_btn" type="button">Time
                        <img class="book-appointment-img" src="${bookVector}" alt="Vector">
                    </button>
                </div>
                <div class="book-appointment_box">
                    <button class="book-appointment_btn" type="button">Doctor
                        <img class="book-appointment-img" src="${bookVector}" alt="Vector">
                    </button>
                </div>
                <div class="book-appointment_box">
                    <button class="book-appointment_btn" type="button">Department
                        <img class="book-appointment-img" src="${bookVector}" alt="Vector">
                    </button>
                </div>
            </form>
            <div class="book-textarea">
                <textarea class="book-appointment-textarea" placeholder="Message"></textarea>
                <button class="book-appointment-btn" type="submit">SUBMIT</button>
            </div>
        </div>
    `;

    section.append(container);
    container.append(bookAppointmentBlock);

    return section;
}