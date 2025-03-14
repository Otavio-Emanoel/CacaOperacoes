function atividade1() {
    const container = document.createElement("div");
    container.classList.add("crossword");

    container.innerHTML = `
        <table>
                        <!-- Linha 1 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>8</td>
                            <td>:</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">1</span><input id="game-1-n1" type="number" maxlength="1"></td>
                            <td>=</td>
                            <td>1</td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">2</span><input type="number" id="game-1-n2"></td>
                            <td>x</td>
                            <td>1</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">3</span><input type="number" id="game-1-n3"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 2 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 3 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">4</span><input type="number" id="game-1-n4"></td>
                            <td>×</td>
                            <td>1</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">5</span><input type="number" id="game-1-n5"></td>
                            <td style="border: none;"></td>
                            <td>6</td>
                            <td>:</td>
                            <td>2</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">6</span><input type="number" id="game-1-n6"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 4 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 5 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>4</td>
                            <td>:</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">7</span><input type="number" id="game-1-n7"></td>
                            <td>=</td>
                            <td>2</td>
                            <td style="border: none;"></td>
                            <td>9</td>
                            <td>:</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">8</span><input type="number" id="game-1-n8"></td>
                            <td>=</td>
                            <td>9</td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">9</span><input type="number" id="game-1-n9"></td>
                        </tr>
                        <!-- Linha 6 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td>:</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>:</td>
                        </tr>
                        <!-- Linha 7 -->
                        <tr>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">10</span><input type="number" id="game-1-n10"></td>
                            <td>:</td>
                            <td>7</td>
                            <td>=</td>
                            <td>1</td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">11</span><input type="number" id="game-1-n11"></td>
                            <td>x</td>
                            <td>3</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">12</span><input type="number" id="game-1-n12"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>3</td>
                        </tr>
                        <!-- Linha 8 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td>x</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                        </tr>
                        <!-- Linha 9 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">13</span><input type="number" id="game-1-n13"></td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">14</span><input type="number" id="game-1-n14"></td>
                            <td>:</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">15</span><input type="number" id="game-1-n15"></td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">16</span><input type="number" id="game-1-n16"></td>
                            <td style="border: none;"></td>
                            <td>0</td>
                            <td>x</td>
                            <td>7</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">17</span><input type="number" id="game-1-n17"></td>
                        </tr>
                        <!-- Linha 10 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>=</td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                        </tr>
                        <!-- Linha 11 -->
                        <tr>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td>7</td>
                            <td>:</td>
                            <td>1</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">18</span><input type="number" id="game-1-n18"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td style="border: none;"></td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">19</span><input type="number" id="game-1-n19"></td>
                            <td>:</td>
                            <td>5</td>
                            <td>=</td>
                            <td><span style="position: absolute; top: 0; left: 0; font-size: 10px; color: gray;">20</span><input type="number" id="game-1-n20"></td>
                        </tr>
                    </table>
    `;

    return container;
}
document.getElementById("game-container").appendChild(atividade1());


const abrirmodal = document.querySelector('#cliqueaqui');
  abrirmodal.addEventListener('click', () => {
    const modal = document.createElement("div");
    modal.classList.add("bgmodal");
    modal.innerHTML = `
        <div class="modal">
            <h1>AGRADECIMENTOS À PROFESSORA ELZA!</h1>
            <div class="prof">
                <img src="./src/assets/elza.png"></img>
            </div>
            <button id="fecharModal">Fechar</button>
        </div>
    `;
    document.querySelector('body').appendChild(modal);

    const fecharmodal = document.querySelector('#fecharModal');
    fecharmodal.addEventListener('click', () => {
      document.querySelector('body').removeChild(modal);
    });
  });

const respostasCorretas = [8, 3, 3, 2, 2, 3, 2, 1, 0, 7, 1, 3, 1, 2, 0.6, 3, 0, 7, 0, 0];

  function verificarRespostas() {
    let todasCorretas = true;

    respostasCorretas.forEach((resposta, index) => {
      const input = document.getElementById(`game-1-n${index + 1}`);
      if (input) {
        const valor = parseFloat(input.value);
        if (valor === resposta) {
          input.style.backgroundColor = 'lightgreen';
        } else {
          input.style.backgroundColor = 'lightcoral';
          todasCorretas = false;
        }
      }
    });

    if (todasCorretas) {
      alert('Parabéns! Você acertou todas as respostas!');
    }
  }