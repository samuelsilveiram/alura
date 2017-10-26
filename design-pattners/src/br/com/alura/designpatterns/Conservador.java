package br.com.alura.designpatterns;

public class Conservador implements Investimento {

	@Override
	public double fazInvestimento(Orcamento orcamento) {
		return orcamento.getValor() * 0.08;
	}

}
