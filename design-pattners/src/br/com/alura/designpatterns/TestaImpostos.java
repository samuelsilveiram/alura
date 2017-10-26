package br.com.alura.designpatterns;

public class TestaImpostos {

	public static void main(String[] args) {
		Imposto iss = new ISS();
		Imposto icms = new ICMS();

		Orcamento orcamento = new Orcamento(500.0);

		CalculadorDeImpostos calculadora = new CalculadorDeImpostos();

		calculadora.realizaCalculo(orcamento, iss);
		calculadora.realizaCalculo(orcamento, icms);
	}
}
