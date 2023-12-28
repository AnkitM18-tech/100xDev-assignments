const express = require("express");

const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// in order to access req.body
app.use(express.json());

app.get("/", function (req, res) {
  const userKidneys = users[0].kidneys;
  const numOfKidneys = userKidneys.length;
  const healthyKidneys = userKidneys.filter((kidney) => kidney.healthy);
  const numOfHealthyKidneys = healthyKidneys.length;
  const numOfUnHealthyKidneys = numOfKidneys - numOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numOfHealthyKidneys,
    numOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({
    msg: `Kidney added is Healthy: ${isHealthy}`,
  });
});

app.put("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const replacingKidneys = users[0].kidneys.filter(
      (kidney) => !kidney.healthy
    );
    replacingKidneys.map((kidney) => (kidney.healthy = true));
    res.json({
      msg: `Replaced the unhealthy kidney with a healthy one`,
    });
  } else {
    res.status(411).json({
      msg: "No Unhealthy Kidneys available",
    });
  }
});

app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const healthyKidneys = users[0].kidneys.filter((kidney) => kidney.healthy);
    users[0].kidneys = healthyKidneys;
    res.json({
      msg: "Unhealthy Kidneys removed",
    });
  } else {
    res.status(411).json({
      msg: "No Unhealthy Kidneys available",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  const unHealthyKidneys = users[0].kidneys.filter((kidney) => !kidney.healthy);
  atleastOneUnhealthyKidney = unHealthyKidneys.length > 0 ? true : false;
  return atleastOneUnhealthyKidney;
}

/*
function sumAll(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const sum = sumAll(n);
  res.send("Hi there!, Your sum is " + sum);
});
*/

app.listen(3000);
