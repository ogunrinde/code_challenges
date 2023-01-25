//Calculate the Minimum moves with the Tower of Hanoi

function towerhelper( n, from_rod, dest_rod, aux_rod, moves ) {
    if( n == 0 )
      return;
      //Move N - 1 disks from from_rod to aux_rod using dest_rod
      towerhelper( n - 1, from_rod, aux_rod, dest_rod, moves );
      //Move 1 disk from from_rod to dest_rod
      moves.push({
          "move": `Moved ${from_rod} to ${aux_rod}`
      });
      //Move N - 1 disks from aux_rod to dest_rod using from_rod
      towerhelper( n - 1, aux_rod, dest_rod, from_rod, moves );
      return moves.length;
  }
  
  function towerHanoi(discs) {
      return towerhelper( discs, 'A', 'C', 'B', [] )
  }
  
  console.log( towerHanoi( 5 ) );