package br.com.alura.designpatterns;

public class Arrojado implements Investimento {

	@Override
	public double fazInvestimento(Orcamento orcamento) {
		if(new java.util.Random().nextDouble() < 0.20){
			return orcamento.getValor() * 0.5;
		}else if (new java.util.Random().nextDouble() >= 0.20 && new java.util.Random().nextDouble() <= 0.50){
			return orcamento.getValor() * 0.3;
		}
		return orcamento.getValor() * 0.06;
	}

}
