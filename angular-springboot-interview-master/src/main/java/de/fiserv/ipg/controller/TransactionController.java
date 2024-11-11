package de.fiserv.ipg.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.fiserv.ipg.entity.Transaction;
import de.fiserv.ipg.service.TransactionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/transactions")
public class TransactionController {

	private final TransactionService transactionService;

	@Autowired
	public TransactionController(TransactionService transactionService) {
		this.transactionService = transactionService;
	}

	@GetMapping
	public ResponseEntity<List<Transaction>> getAllTransactions() {
		return ResponseEntity.ok(transactionService.getAllTransactions());
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Optional<Transaction>> getAllTransactionsById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(transactionService.getAllTransactionsById(id));
	}
	
	@PostMapping
	public ResponseEntity<Transaction> createTransactions(@Validated @RequestBody Transaction transaction){
		return ResponseEntity.ok(transactionService.createTransactions(transaction));
		
	}
}
