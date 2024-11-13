---
layout: base
title: Notes on an APC Back-UPS [BX1100C-IN]
date: 2024-07-16 18:30:00
categories: product-review
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# Notes on an APC Back-UPS [BX1100C-IN]

<div markdown="1" class="content-tile-l2">
## UPS Properties and Buying Decision  
- **The UPS had a fan**, so I preferred it over other brands, which didn't have one and might have been subject to overheating.  
    -   This model had the fan specifically on the coil. (Expectation 1)
- The UPS did not have in inbuilt Voltage Regulator (Expectation 2)

</div>
<div markdown="1" class="content-tile-l2">
## Expectations and Observations

### 1. Expectation: Fan would work  
1.  Fan should turn on whenever the coil temperature goes above some threshold temperature, say 45°C.
2.  Coil temperature should remain under 50°C
3.  Since the UPS seems to be a specific model for IN, it should handle higher ambient temperatures of ~ 30°C well.

#### Observation: Not good enough  
1.  Fan doesn't turn on as long as mains supply is present, even though the coil keeps on getting hot.
    -   The fan only turns on when the mains supply is down
2.  The coil stays warm even when no system is connected, as long as the UPS is turned on
3.  The coil easily exceeds 50°C and stays above it most of the time even in ambient temperatures below 20°C, during nominal operation

##### Expectation from previous observation  
-   The coil should normally withstand observed operating temperatures, over long periods.
    -   The APC technician called the high temperature as normal behaviour
    -   It cannot. See later

### 2. Expectation: For unstable voltages  
1.  When the mains supply voltage drops slowly to 0, instead of an immediate, proper shutdown:
    -   When the voltage (V_RMS) goes below operating levels, the UPS should disconnect from the mains supply and start providing power from the backup battery.

#### Observation: Power supply interrupted (guess, it's not a UPS anymore)  
1.  When the mains supply goes below UPS operating voltages (but not down to 0), the UPS will immediately stop giving power to the appliances, and give a long continuous beep and red LED error.
    -   Any and every unsaved progress is lost.
2.  At the same time, another computer, not connected to the UPS, was working perfectly well, with not so much as a flicker. Meaning, the Computer's Power Suppy Unit (a Corsair unit) handled the condition well.

### 3. Observation: Volatile Compounds  
1.  With the consistently higher temperatures that the UPS created for the coil and occasional high humidity conditions that occurred during the rainy seasons, the UPS eventually started releasing smells.
    -   I got the unit replaced under warranty after multiple months of effort.
    -   The replacement UPS (now out of warranty) started releasing Volatile Compounds (similar to the previous one, but in a lower amount, for now) after ~ 5 years of usage.
    -   The Volatile Compounds, while not tested for the exact composition, caused headaches, nausea and other problems after a period of 1-2 weeks of exposure, after which I managed to single-out the producer.
        -   I don't intend on waiting long enough for the same to happen a second time, with the replacement unit.

</div>
<div markdown="1" class="content-tile-l2">
## Positive aspects  
-   The battery never went bad (puffing/swelling etc.), over the 5 years of use.
    -   After a considerable period, the battery voltages are now at ~14V, but instead of getting a battery replacement, I will be looking for another UPS, (due to the aforementioned problems).
-   The **erroring out on low voltages** happened only on the **replacement unit** (which is supposedly a refurbished unit) and did not happen with the original one (the original one gave out Volatile Compounds)
    -   So this might have been a on-off problem

</div>
</div>
