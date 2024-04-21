require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51Oglh9IlF1WUtgeQ4p6NMrrlq1998QaccGVI9ME0IQkm1jhMi1NQwwU2jhoOPg78PodstuWaEE09Q6GvdJLuXoRH00KbskuYoF"
);
(async () => {
  const customers = await stripe.customers.list();
  console.log(customers);
})();
