function preload() {

  data = loadTable('03_meteroits.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(2000, 15000);
  let c = color(255)
  background(c)
  console.log("Rowcount= " + data.getRowCount());
  console.log(data.columns);

  textSize(30)
  text('Meteoriten', 10, 40);
  text('Ein Meteorit [meteoˈrit] ist ein relativ kleiner Festkörper kosmischen Ursprungs, der die Erdatmosphäre durchquert und den Erdboden erreicht hat.', 10, 80)
  text('Ort', 320, 120)
  text('Größe', 500, 120)
  text('Jahr', 600, 120)

  let mass = data.getColumn("mass");
  let minMass = min(mass)
  let maxMass = max(mass)
  console.log(mass)
  console.log(minMass)
  console.log(maxMass)

  let columnMass

  for (var i = 0; i < data.getRowCount(); i++) {
    columnMass = data.getNum(i, "mass");
    let mappedColumnMass = map(columnMass, 0, 90000000000, 0, 10)

    fill("blue")
    circle(540, i * 40, log(mappedColumnMass))
    console.log(columnMass)
    
    
    noStroke();
    fill("blue");
    let columnName = data.getString(i, "name");
    textSize(15);
    text(columnName, 320, i * 40);

    noStroke();
    fill("blue");
    let columnYear = data.getString(i, "year");
    textSize(15);
    text(columnYear, 600, i * 40);


    

  }



}

function draw() {

}