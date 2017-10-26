package br.com.alura.designpatterns;

public class TestaInvestimento {

	public static void main(String[] args) {
		RealizadorDeInvestimentos realizadorDeInvestimentos = new RealizadorDeInvestimentos();
		
		Orcamento orcamento = new Orcamento(500.0);

		System.out.println(orcamento.getValor());
		
		realizadorDeInvestimentos.realizaInvestimento(orcamento, new Arrojado());
		
		System.out.println(orcamento.getValor());
		
	}
}
