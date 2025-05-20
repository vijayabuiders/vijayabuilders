import React, { useState } from 'react';

const PricingPage = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const pricingData = [
    {
      title: 'Basic Plan',
      originalPrice: 1999,
      offerPrice: 1899,
      features: {
        Design: ['2D Floor Plan'],
        Structure: [
          'Basement height: Upto 2 feet from Ground Level Car parking 1.5 feet',
          'Steel: Any ISI brand',
          'Aggregates: 20mm & 40mm',
          'Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall',
          'Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price',
          'Cement: Any ISI brand',
          'M Sand: Brickwork & P Sand: Plastering',
          'RCC Design Mix: M20',
          'Ceiling Height: clear 10 Feet',
        ],
        Kitchen: [
          'Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 35 Per Sq ft',
          'Main Sink Faucet Upto 1500 & ISI Marked',
          'Kitchen Sink: Stainless Steel Upto 2000 Rs',
          'Kitchen Granite Slab: 20 mm Thick Upto 80 Rs per Sq ft',
        ],
        Bathroom: [
          'Wall Tiles For 7 Feet Upto 35 Rs Per Sq ft',
          'Sanitary Ware & CP Fitting Upto Rs 8,000.',
          'CPVC/PVC: Any ISI brand',
          'Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower',
          'All bathroom fittings are white color & basic model in any ISI brand',
          'PVC WaterProof Doors',
        ],
        Plumbing: [
          'Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.',
          'Dining – 1 wash basin with tap',
          'Kitchen – Single stainless steel sink with 1 tap.',
          'Service – 1 tap point & water outlet point for washing machine',
        ],
        'Doors & Windows': [
          'Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness',
          'Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch',
          'Windows: Standard aluminium 2 Track sliding window',
          { subtitle: 'Door sizes:' },
          'Main Door – 3.5′(Width) X 7′(Height)',
          'Rooms – 3′(Width) X 7′(Height)',
          'Bathroom & Balcony – 2.5′(Width) X 7′(Height)',
          'Window size – 4′(Width) X 4′(Height) (1 window per room)',
        ],
        Painting: [
          { subtitle: 'Interior:' },
          '1 coat of any ISI brand putty',
          '2 coats of any ISI brand emulsion paint for the walls (light colours)',
          '1 coat of primer and 2 coats of any emulsion paint for the ceiling',
          { subtitle: 'Exterior:' },
          '1 coat of any ISI brand primer',
          '1 coat of white cement',
          '2 coats of any emulsion paint (light colours)',
        ],
        Flooring: [
          'Living & Dining Flooring: Tiles Upto 45 Rs Per Sq ft',
          'Room & Kitchen Flooring: Tiles Upto 45 Rs Per Sq ft',
          'Balcony & Open Area Flooring: Tiles Upto 35 Rs Per Sq ft',
          'Staircase Flooring: Anti-skid Tiles Upto 35 Rs Per Sq ft',
          'Parking Tiles: Anti-skid Tiles Upto 35 Rs Per Sq ft',
        ],
        Electricals: [
          'Wires – Any ISI brand',
          'Switches – Any ISI brand',
          { subtitle: 'Electrical Points' },
          {
            subtitle: 'Bedroom',
            description: '– 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.',
          },
          { description: '1 AC point, 1 fan point and 2 lights point' },
          {
            subtitle: 'Bathroom',
            description: '- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror',
          },
          {
            subtitle: 'Hall',
            description: '- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection',
          },
          { subtitle: 'Dining', description: '1 switch box with switches for 1 fan & 1 light' },
          { subtitle: 'Pooja', description: '1 switch box with switch for 1 light' },
          {
            subtitle: 'Kitchen',
            description:
              '1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/oven.',
          },
          {
            subtitle: 'Service',
            description:
              '1 switch for light, 1 switch box with 15 amps socket & switch for washing machine',
          },
        ],
        'Other Inclusions': ['1 Loft in each bedroom, kitchen & pooja room on the shorter side of the wall','1 Shelf in each bedroom, kitchen & pooja room of maximum width 5 feet'],
        'Extra Charges': ['Compound Wall',
          'Lift',
          'Roof weathering',
          'Carpentry & other wooden work',
          'EB Connections & Charges',
          'Govt. approval charges',
          'Water Connections & Charges',
          'Underground water storage Sump Rs 15 Per Litre',
          'Overhead sintex tank Rs.15 per litre',
          'Overhead concrete tank Rs 30 per litre',
          'Elevation Work Extra',
          'Water recycling tank based on the requirement',
          'Additional foundation height',
          'Soil testing',
          'Structural designing',
          '3D elevation designing',
          'Rainwater harvesting',
          'Outer area development (setback)',
          'Any Sunken flooring will be Additional Cost'],
      },
      additionalPoints: ['RCC framed structure',
        'Basic materials',
        'RCC foundation & roof'],
    },
    {
      title: 'Standard Plan',
      originalPrice: 2299,
      offerPrice: 2099,
      features: {
        Design: ['2D Floor Plan','3D Floor Plan'],
        Structure: [
          'Basement height: Upto 3 feet from Ground Level Car parking 1.5 feet',
          'Steel: ARS',
          'Aggregates: 20mm & 40mm',
          'Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall',
          'Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price',
          'Cement:Zuari / Penna / Chettinad',
          'M Sand: Brickwork & River Sand: Plastering',
          'RCC Design Mix: M20',
          'WaterProofing: Dr.Fixit',
          'Ceiling Height: clear 10 Feet',
        ],
        Kitchen: [
          'Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 45 Per Sq ft',
          'Main Sink Faucet Upto 2000 & ISI Marked',
          'Kitchen Sink: Stainless Steel Upto 3000 Rs',
          'Kitchen Granite Slab: 20 mm Thick Upto 100 Rs per Sq ft',
        ],
        Bathroom: [
          'Wall Tiles For 7 Feet Upto 45 Rs Per Sq ft',
          'Sanitary Ware & CP Fitting Upto Rs 12,000.',
          'CPVC/PVC: Ashirwad/Supreme/Astral',
          'Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower',
          'All bathroom fittings are white color & basic model in parryware',
          'PVC WaterProof Doors',
        ],
        Plumbing: [
          'Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.',
          'Dining – 1 wash basin with tap',
          'Kitchen –  Double stainless steel sink with 1 taps. 1 RO point',
          'Service –  1 RO point1 tap point & water outlet point for washing machine',
        ],
        'Doors & Windows': [
          'Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness',
          'Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch',
          'Windows: Standard aluminium 2 Track sliding window with powder coating to the required colour / UPVC sliding windows (white color)',
          { subtitle: 'Door sizes:' },
          'Main Door – 3.5′(Width) X 7′(Height)',
          'Rooms – 3′(Width) X 7′(Height)',
          'Bathroom & Balcony – 2.5′(Width) X 7′(Height)',
          'Window size – 4′(Width) X 4′(Height) (1 window per room)',
        ],
        Painting: [
          { subtitle: 'Interior:' },
          '2 coats of Asian/ Birla putty ',
          '1 coat of Asian primer and 2 coats of Asian tractor emulsion paint for the walls (light colours)',
          '1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling',
          { subtitle: 'Exterior:' },
          '1 coat of  Asian primer',
          '1 coat of white cement ',
          '2 coats of Asian ace emulsion paint (light colours)',
        ],
        Flooring: [
          'Living & Dining Flooring: Tiles Upto 50 Rs Per Sq ft',
          'Room & Kitchen Flooring: Tiles Upto 50 Rs Per Sq ft',
          'Balcony & Open Area Flooring: Tiles Upto 45 Rs Per Sq ft',
          'Staircase Flooring: Anti-skid Tiles Upto 45 Rs Per Sq ft',
          'Parking Tiles: Anti-skid Tiles Upto 45 Rs Per Sq ft',
        ],
        Electricals: [
          'Wires – Any ISI brand',
          'Switches – Any ISI brand',
          { subtitle: 'Electrical Points' },
          {
            subtitle: 'Bedroom',
            description: '– 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.',
          },
          { description: '1 AC point, 1 fan point and 2 lights point' },
          {
            subtitle: 'Bathroom',
            description: '- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror',
          },
          {
            subtitle: 'Hall',
            description: '- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection',
          },
          { subtitle: 'Dining', description: '1 switch box with switches for 1 fan & 1 light' },
          { subtitle: 'Pooja', description: '1 switch box with switch for 1 light' },
          {
            subtitle: 'Kitchen',
            description:
              '1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/oven.',
          },
          {
            subtitle: 'Service',
            description:
              '1 switch for light, 1 switch box with 15 amps socket & switch for washing machine',
          },
          {
            subtitle: 'Extras',
            description:
              'Extras – One 5 amps switch & socket for computer',
          },
        ],
        'Other Inclusions': ['Overhead Tank: 1000 litres Sintex',
          'MS Staircase Railing',
          'Parapet Wall 3 Feet High (included if headroom is built)',
          'Roof weathering is included if the build-up area is more than 2000 sft.',
          'Rainwater harvesting'],
        'Extra Charges': ['Compound Wall',
          'Lift',
          'Roof weathering',
          'Carpentry & other wooden work',
          'EB Connections & Charges',
          'Govt. approval charges',
          'Water Connections & Charges',
          'Underground water storage Sump Rs 15 Per Litre',
          'Overhead sintex tank Rs.15 per litre',
          'Overhead concrete tank Rs 30 per litre',
          'Elevation Work Extra',
          'Water recycling tank based on the requirement',
          'Additional foundation height',
          'Soil testing',
          'Structural designing',
          '3D elevation designing',
          'Rainwater harvesting',
          'Outer area development (setback)',
          'Any Sunken flooring will be Additional Cost'],
      },
      additionalPoints: ['All features in basic package',
        'Free Smart Home Automation',
        'Free Organic Terrace Gardening'],
    },
    {
      title: 'Premium Plan',
      originalPrice: 2599,
      offerPrice: 2449,
      features: {
        Design: ['2D Floor Plan','3D Floor Plan','3D Elevation Design'],
        Structure: [
          'Basement height: Upto 4 feet from Ground Level Car parking 1.5 feet',
          'Steel: Tata Tiscon, SAIL',
          'Aggregates: 20mm & 40mm',
          'Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall',
          'Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price',
          'Cement:Ramco / Ultratech / Coromandel ',
          'M Sand: Brickwork & River Sand: Plastering',
          'RCC Design Mix: M20',
          'WaterProofing: Dr.Fixit',
          'Ceiling Height: clear 10 Feet',
        ],
        Kitchen: [
          'Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 55 Per Sq ft',
          'Main Sink Faucet Upto 2500 & ISI Marked',
          'Kitchen Sink: Stainless Steel Upto 4000 Rs',
          'Kitchen Granite Slab: 20 mm Thick Upto 120 Rs per Sq ft',
        ],
        Bathroom: [
          'Wall Tiles For 7 Feet Upto 55 Rs Per Sq ft',
          'Sanitary Ware & CP Fitting Upto Rs 18,000.',
          'CPVC/PVC: Ashirwad/Supreme/Astral',
          'Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower',
          'All bathroom fittings are white color & basic model in jaquar',
          'ABS WaterProof Doors',
        ],
        Plumbing: [
          'Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.',
          'Dining – 1 wash basin with tap',
          'Kitchen –  Double stainless steel sink with 2 taps. 1 RO point',
          'Service –  1 RO point 1 tap point & water outlet point for washing machine',
        ],
        'Doors & Windows': [
          'Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness',
          'Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch',
          'Windows: Standard aluminium 3 Track sliding window with powder coating to the required colour / UPVC sliding windows (white color)',
          { subtitle: 'Door sizes:' },
          'Main Door – 3.5′(Width) X 7′(Height)',
          'Rooms – 3′(Width) X 7′(Height)',
          'Bathroom & Balcony – 2.5′(Width) X 7′(Height)',
          'Window size – 4′(Width) X 4′(Height) (1 window per room)',
        ],
        Painting: [
          { subtitle: 'Interior:' },
          '2 coats of Asian/ Birla putty ',
          '1 coat of Asian primer and 2 coats of Asian tractor emulsion paint for the walls (light colours)',
          '1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling',
          { subtitle: 'Exterior:' },
          '1 coat of  weatherproof primer',
          '1 coat of white cement ',
          '2 coats of weatherproof emulsion paint (light colours)',
        ],
        Flooring: [
          'Living & Dining Flooring: Tiles Upto 120 Rs Per Sq ft',
          'Room & Kitchen Flooring: Tiles Upto 120 Rs Per Sq ft',
          'Balcony & Open Area Flooring: Tiles Upto 55 Rs Per Sq ft',
          'Staircase Flooring: Anti-skid Tiles Upto 55 Rs Per Sq ft',
          'Parking Tiles: Anti-skid Tiles Upto 55 Rs Per Sq ft',
        ],
        Electricals: [
          'Wires – Finolex',
          'Switches – Legrand',
          { subtitle: 'Electrical Points' },
          {
            subtitle: 'Bedroom',
            description: '– 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control.',
          },
          { description: '1 AC point, 1 fan point and 2 lights point' },
          {
            subtitle: 'Bathroom',
            description: '- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror',
          },
          {
            subtitle: 'Hall',
            description: '- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection',
          },
          { subtitle: 'Dining', description: '1 switch box with switches for 1 fan & 1 light' },
          { subtitle: 'Pooja', description: '1 switch box with switch for 1 light' },
          {
            subtitle: 'Kitchen',
            description:
              '1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/oven.',
          },
          {
            subtitle: 'Service',
            description:
              '1 switch for light, 1 switch box with two 15 amps socket & switch for washing machine (one in the top & on in the bottom)',
          },
          {
            subtitle: 'Extras',
            description:
              '1 additional switch & socket in each room for mobile charging. 5 amps socket & switch for computer',
          },
        ],
        'Other Inclusions': ['Overhead Tank: 2000 litres Sintex',
          'SS Staircase Railing',
          'Parapet Wall 3 Feet High (included if headroom is built)',
          'Roof weathering is included if the build-up area is more than 2000 sft.',
          '1 MS safety grill gate for main door',
          'Soil testing',
          'Structural designing',
          'Rainwater harvesting'],
        'Extra Charges': ['Compound Wall',
          'Lift',
          'Carpentry & other wooden work',
          'EB Connections & Charges',
          'Govt. approval charges',
          'Water Connections & Charges',
          'Underground water storage Sump Rs 15 Per Litre',
          'Overhead sintex tank Rs.15 per litre',
          'Overhead concrete tank Rs 30 per litre',
          'Gates',
          'Elevation Work Extra',
          'Water recycling tank based on the requirement',
          'Additional foundation height',
          'Electrical/plumbing drawings',
          'Interior 3D elevation designing',
          'Rainwater harvesting',
          'Outer area development (setback)',
          'Any Sunken flooring will be Additional Cost'],
      },
      additionalPoints: ['All features in standard package',
        'Granite flooring',
        'Premium quality materials'],
    },
  ];
  
  

  const handleToggle = (planIndex, section) => {
    const key = `${planIndex}-${section}`;
    setOpenFeature(prev => (prev === key ? null : key));
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    pricingCard: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      width: '300px',
      minWidth: '300px',
      flexShrink: 0,
    },
    price: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1976d2',
    },
    button: {
      backgroundColor: '#1976d2',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      marginTop: '15px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    dropdownButton: {
      backgroundColor: '#1976d2',
      color: '#fff',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      width: '100%',
      textAlign: 'left',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdownList: {
      marginTop: '10px',
      padding: '0',
      listStyleType: 'none',
      textAlign: 'left',
    },
    dropdownItem: {
      padding: '5px 0',
    },
    plansWrapper: {
      display: 'flex',
      overflowX: 'auto',
      gap: '20px',
      padding: '20px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Our Pricing Plans</h1>

      <div style={styles.plansWrapper}>
        {pricingData.map((plan, index) => (
          <div key={index} style={styles.pricingCard}>
            <h2>{plan.title}</h2>
            <p style={styles.price}>{plan.price}</p>

            {Object.entries(plan.features).map(([section, items]) => {
              const key = `${index}-${section}`;
              const isOpen = openFeature === key;

              return (
                <div key={section} style={{ marginBottom: '15px' }}>
                  <button
                    onClick={() => handleToggle(index, section)}
                    style={styles.dropdownButton}
                  >
                    <span>{section}</span>
                    <span>{isOpen ? '➖' : '➕'}</span>
                  </button>
                  {isOpen && (
                    <ul style={styles.dropdownList}>
                      {items.map((item, idx) => (
                        <li key={idx} style={styles.dropdownItem}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            <button style={styles.button}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
