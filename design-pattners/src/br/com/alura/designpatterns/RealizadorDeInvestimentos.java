package br.com.alura.designpatterns;

public class RealizadorDeInvestimentos {

	public void realizaInvestimento(Orcamento orcamento, Investimento investimento){
		orcamento.efetuaCredito(investimento.fazInvestimento(orcamento) * 0.75);
	}
	
}
