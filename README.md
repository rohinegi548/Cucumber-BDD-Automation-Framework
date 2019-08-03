# Cucumber-BDD-Automation-Framework
Behavior Driven Development Cucumber - Selenium based automation framework including Allure reports

This framework contains sample code containing:
- 1 feature (feature file)
- 2 Scenarios
	- Simple scenario login scenario and adding products to carts
	- Advance scenario where parameterization has been used (Scenario Outline examples) to search different types of products and listing
	  out them
	  
Directory structure:


Steps to run at your system:
	- Clone the repository using "git clone <repository url>"
	- Change "Username" and "Password" in both scenarios in feature file
	- Run "mvn clean test"
	- Run "mvn site"
	
Cucumber Reports: net.masterthought - This will generate two reports

	- Cucumber Pretty (folder - "target\cucumber-reports\cucumber-pretty"), file - "index.html"
	
	Example:
	
	- Cucumber Advance (folder - "target\cucumber-reports\advanced-reports\cucumber-html-reports"), file - "overview-features.html"
	
	Example:
	
	See configuration in "pom.xml" file
				<plugin>
				<groupId>net.masterthought</groupId>
				<artifactId>maven-cucumber-reporting</artifactId>
				<version>3.8.0</version>
				<executions>
					<execution>
						<id>execution</id>
						<phase>verify</phase>
						<goals>
							<goal>generate</goal>
						</goals>
						<configuration>
							<projectName>MyProjectName</projectName>  <!-- Replace with project name -->
							<outputDirectory>target/cucumber-reports/advanced-reports</outputDirectory>
							<cucumberOutput>target/cucumber-reports/CucumberTestReport.json</cucumberOutput>
							<buildNumber>1</buildNumber>
							<parallelTesting>false</parallelTesting>
							<enableFlashCharts>false</enableFlashCharts>
							<skippedFails>true</skippedFails>
						</configuration>
					</execution>
				</executions>
				</plugin>
				
				
				
Allure Report: Allure reports will be generated based on the testcases json files when you'll run "mvn site". 
Allure dependencies to config in pom.xml:
	<dependency>
			<groupId>ru.yandex.qatools.allure</groupId>
			<artifactId>allure-cucumber-jvm-adaptor</artifactId>
			<version>1.6.2</version>
	</dependency>
	
Add this under Maven Surefier plugin:
	<argLine>
				-javaagent:"${settings.localRepository}/org/aspectj/aspectjweaver/${aspectj.version}/aspectjweaver-${aspectj.version}.jar"
						-Dcucumber.options="--plugin
						ru.yandex.qatools.allure.cucumberjvm.AllureReporter"
	</argLine
	
	<reporting>
		<excludeDefaults>true</excludeDefaults>
		<plugins>
			<plugin>
				<groupId>ru.yandex.qatools.allure</groupId>
				<artifactId>allure-maven-plugin</artifactId>
				<version>2.5</version>
			</plugin>
		</plugins>
	</reporting>
You will be able to locate the report in folder : "target\site\allure-maven-plugin", the "Index.html" file. You can either open it through Firefox or on a local server. I had used "Jetty server", using this command: "mvn jetty:run". And then open url in your any browser "http://localhost:8080" and there you go.

MVN Jetty configuration is to be done in pom.xml if want to use it:
	<!--Needed only to show reports locally. Run jetty:run and open localhost:8080 to show the report -->
	<plugin>
		<groupId>org.eclipse.jetty</groupId>
		<artifactId>jetty-maven-plugin</artifactId>
		<version>9.2.10.v20150310</version>
		<configuration>
			<webAppSourceDirectory>${project.build.directory}/site/allure-maven-plugin</webAppSourceDirectory>
			<stopKey>stop</stopKey>
			<stopPort>1234</stopPort>
		</configuration>
	</plugin>

Example: 

Added a sample Execution Video and Generated Reports, See here: 