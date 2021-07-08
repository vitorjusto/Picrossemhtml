
var jogo = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  ];
var jogox = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  ];
var resposta = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  ];
var aux=0, acertos=0;
var modo=0;

function dica()
{

      var k=0, dica=[0], dica2=[0];
      var i=0;
      var j=0, l=0;
      
      
      while (j<15)
      {

            dica = [0];   
            dica2 =[0];
            while(i<15)
            {
                  if(resposta[i][j])
                  {
                        dica[k]++;      
                  }else
                  {
                        if(dica[k]!== 0)
                        {
                              k++;
                              dica.push(0);
                        }
                  }

            
            
            if(resposta[j][i])
                  {
                        dica2[l]++;      
                  }else
                  {
                        if(dica2[l]!== 0)
                        {
                              l++;
                              dica2.push(0);
                        }
                  }
                  i++;      
            }
            if(dica[k] === 0)
                  dica.pop();
            if(dica2[l] === 0)
                  dica2.pop();
            
            document.getElementById("col" + j).innerHTML= dica.join("<br/>");
            document.getElementById("lin" + j).innerHTML= dica2.join(" ");
            
            
            i = 0;
            j++;
            k=0;
            l=0;
}
     

}

function desenhar()
{
      var c = document.getElementById("quadriculado");
      var a = c.getContext("2d");
      var i = 0, j = 0;
      a.fillStyle= "gray";
      while (i <= 300)
      {
            
            a.moveTo(0, i);
            a.lineTo(300, i);
            
            a.moveTo(i, 0);
            a.lineTo(i, 300);
            
            i = i + 20;
      }
      
      a.stroke();

      i = 0;
      
      while(i <= 14)
      {
            while(j <= 14)
            {
                
                resposta[i][j] = Math.floor((Math.random()*10)/5);
                resposta[i][j]?aux++:0;
                j++;  
            }
            i++;
            j=0;

      }

      
      dica();
      a.stroke();
      

      c = document.getElementById("modo");
      a = c.getContext("2d");      

      modo = 0;
      a.fillStyle="black";
      a.fillRect(0, 0,20, 20);
      a.stroke();
}

function coisa()
{


      var c = document.getElementById("quadriculado");
      var a = c.getContext("2d");
      var rect = c.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var i = 0, j = 0;

     


      while(1)
      {
            if(x >= i*20 && x < (i*20 + 20))
            {
                  while(1)
                  {
                        if(y >= j*20 && y < (j*20 + 20))
                        {
                              if(jogo[j][i])//caso apagar
                              {
                                    
                                    jogo[j][i]=0;
                                    if(resposta[j][i]==jogo[j][i])
                                    {
                                          acertos++;
                                    }else
                                    {
                                          acertos--;
                                    }

                                    a.fillStyle="white";
                                    a.fillRect(i*20 + 1, j*20 + 1,18,18);
                              }
                              else//caso colocar
                              {
                                   
                                    
                                    
                                    if(modo == 1 && jogox[j][i] === 0)
                                    {
                                          a.fillStyle="red"
                                          a.font="26px arial black";
                                          a.fillText("X",i*20, j*20 + 20);
                                          
                                          
                                          jogox[j][i] = 1;
                                    }else if(jogox[j][i] === 0)
                                    {
                                          a.fillStyle="black";
                                          a.fillRect(i*20 + 1, j*20 + 1,19,19);
                                    
                                          
                                          jogo[j][i]=1;
                                          if(resposta[j][i]==jogo[j][i])
                                          {
                                                acertos++;
                                          }else
                                          {
                                                acertos--;
                                          }
                                    }else
                                    {
                                          a.fillStyle="white";
                                          a.fillRect(i*20 + 1, j*20 + 1,18,18);
                                          
                                          
                                          jogox[j][i] = 0;
                                    }
                                    
                                    
                              }
                              break;
                        }
                        
                        j++;
                  }
                  
                  break;
            }
            i++;
      }
a.stroke();
if(acertos == aux)
{
      alert("você ganhou!!");
}
      
}

function trocarmodo()
{
      debugger;
      var c = document.getElementById("modo");
      var a = c.getContext("2d");      
      
                                    
      
      
      if(modo)
      {
            modo = 0;
            a.fillStyle="black";
            a.fillRect(0, 0,20, 20);
      }
      else
      {
            
            modo = 1;
            
            a.fillStyle="white";
            a.fillRect(0, 0, 20, 20);


            
            a.fillStyle="red"
            a.font="27px arial black";
            a.fillText("X", 0, 20);
            
      }
      a.stroke();
}