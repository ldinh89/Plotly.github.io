function buildGraph(sample) {
    d3.json("samples.json").then(function(dataValue) {
        console.log(dataValue); 
        var samples = dataValue.samples;
        var filterredSamples = samples.filter(object => object.id == sample);
        
        
        
        
        var x = filterredSamples[0]["sample_values"];
        var y =  filterredSamples[0]["otu_ids"];
        var hoverText = filterredSamples[0]["otu_labels"];
        

        
        var trace1 = {
            x: x.slice(0,10).reverse(),
            y: y.slice(0,10).reverse(),
            text: hoverText.slice(0,10).reverse(),
            type: 'bar',
            orientation: 'h'
        };

        var data1 = [trace1];
        var layout1 = {
            margin: {t:300, l:200}
        
        }

    

        Plotly.newPlot('bar', data1, layout1);
    

        var trace2 = {
            x: y,
            y: x,
            text: hoverText,
            mode: "markers",
            marker: {
                color: y,
                size: x,
            }
        };

        var data2 = [trace2];

        var layout = {
        
            xaxis: {title: "OTU ID"},
            hovermode: "closest", 
            margin: {t:0}
        };

        Plotly.newPlot('bubble', data2, layout);


 
    
    });
};
// buildGraph(940);
// console.log(buildGraph);

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata= data.metadata;
      var filteredArray= metadata.filter(sampleobject => sampleobject.id == sample);
      var ID = filteredArray[0];
      var metaChart_panel = d3.select("#sample-metadata");
      metaChart_panel.html("");
      Object.entries(ID).forEach(([key, value]) => {
        metaChart_panel.append("p").text(`${key}: ${value}`);
      });

      
    
    });
  }

//   buildMetadata(940);
//   console.log(buildMetadata);



// function init() {
//     var selectTestID = d3.select("#selDataset");
//     d3.json("sample.json").then((dataValue) => {
//         var sampleID = dataValue.names;
//         sampleID.forEach((sample) => {
//             selectTestID.append("option").text(sample).property("value", sample);
                        
                        
//         });
//         const firstID = sampleID[0];
//         buildGraph(firstID);
//         buildMetadata(firstID);
//     });
// };


// function optionChanged(newID) {
//     buildGraph(newID);
//     buildMetadata(newID);
// };

// init();

