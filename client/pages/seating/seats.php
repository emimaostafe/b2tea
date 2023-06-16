
<div class="seating-area">

        <div class="table-container1">
        <?php

        for($i=0;$i<10;$i++){

        ?>
         <div class="table">

                        <div class="table-shape">
                            <svg>
                                <!-- table -->
                                <a href="./pay.php">
                                    <circle id="round-table" r="45" cx="90" cy="90" />
                                    <text x="45%" y="53%" text-anchor="middle" font-size="20" fill="white">Table 1</text>
                                </a>
                                <!-- seats -->
                                <circle id="seat" cx="45" cy="45" r="15" />
                                <circle id="seat" cx="135" cy="45" r="15"  />
                                <circle id="seat" cx="45" cy="135" r="15"  />
                                <circle id="seat" cx="135" cy="135" r="15" />

                            </svg>
                        </div>

          </div>
            <?php
               }
             ?>
          </div>
</div>
