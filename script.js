function gameBoard()
	{
		var i;
		var gameboard;
				
		gameboard = document.getElementById('gameboard');
								  
		for(i=0;i<80;i++)
			{
				var cell;
					
				cell = document.createElement('DIV');
					
				if(i%8==0)
					{
						cell.classList.add('temp');
					}
				
				cell.classList.add('cell');
				gameboard.appendChild(cell);
			}
	}
