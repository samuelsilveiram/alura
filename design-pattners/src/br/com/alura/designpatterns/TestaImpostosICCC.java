package br.com.alura.designpatterns;

public class TestaImpostosICCC {

	public static void main(String[] args) {
		Imposto iccc = new ICCC();
		CalculadorDeImpostos calculadora = new CalculadorDeImpostos();

		Orcamento orcamento = new Orcamento(500.0);

		calculadora.realizaCalculo(orcamento, iccc);
		
		Orcamento orcamento1 = new Orcamento(1500.0);
		calculadora.realizaCalculo(orcamento1, iccc);
		
		Orcamento orcamento2 = new Orcamento(10500.0);
		calculadora.realizaCalculo(orcamento2, iccc);
		
	}
}
