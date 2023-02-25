const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  const { company, name, fetured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (fetured) {
    queryObject.fetured = fetured;
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    const sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if(select){
    const selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

//   Add peginations
// default 1 in case of page.
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);


  const myData = await apiData;
  res.status(200).json({ myData });
};

exports.getAllProductsTesting = async (req, res) => {
  res.status(200).json({ mag: "I am get all testing products." });
};
