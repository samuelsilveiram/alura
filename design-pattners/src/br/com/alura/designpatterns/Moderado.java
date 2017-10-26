package br.com.alura.designpatterns;

public class Moderado implements Investimento{

	@Override
	public double fazInvestimento(Orcamento orcamento) {
		if(new java.util.Random().nextDouble() > 0.50){
			return orcamento.getValor() * 0.25;
		}
		return orcamento.getValor() * 0.07;
	}

}
