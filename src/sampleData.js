const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: "Charlie",
      lastName: "Clinton",
      phoneNumber: 126337356193,
      stylist: "Julia",
      service: "waving",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(10),
    customer: {
      firstName: "Frankie",
      lastName: "Webber",
      phoneNumber: 126337356193,
      stylist: "Julia",
      service: "Hair cut",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(11),
    customer: {
      firstName: "Casey",
      lastName: "Doddle",
      phoneNumber: 126337356193,
      stylist: "Julia",
      service: "waving",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(12),
    customer: {
      firstName: "Ashley",
      lastName: "Mark",
      phoneNumber: 126337356193,
      stylist: "Julia",
      service: "waving",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(13),
    customer: {
      firstName: "Jordan",
      lastName: "Mark",
      phoneNumber: 126337356193,
      stylist: "Julia",
      service: "waving",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(14),
    customer: {
      firstName: "Jay",
      lastName: "Rodrigues",
      phoneNumber: 126337356193,
      stylist: "Path",
      service: "Shampoo and washing",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(15),
    customer: {
      firstName: "Alex",
      lastName: "Matts",
      phoneNumber: 9037356193,
      stylist: "John",
      service: "Brading and washing",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(16),
    customer: {
      firstName: "Jules",
      lastName: "Jordan",
      phoneNumber: 6337356193,
      stylist: "Denco",
      service: "Perming",
      notes: "Confirmed",
    },
  },
  {
    startsAt: at(17),
    customer: {
      firstName: "Stevie",
      lastName: "Burke",
      phoneNumber: 26337356193,
      stylist: "Julia",
      service: "Hair Cut",
      notes: "Confirmed",
    },
  },
];
