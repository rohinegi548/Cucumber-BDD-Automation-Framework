<h1># Cucumber-BDD-Automation-Framework</h1>
<h2>Behavior Driven Development Cucumber - Selenium based automation framework including Allure reports</h2>

<h2>This framework contains sample code containing:</h2>
	<ul><li>1 feature (feature file)</li></ul>
	<ul><li>2 Scenarios</li>
	<li>Simple scenario login scenario and adding products to carts</li>
	<li>Advance scenario where parameterization has been used (Scenario Outline examples) to search different types of products and listing out them</li></ul>
	  
<h2>Directory structure:</h2>
<br>
<img src="https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/directoryStructure.PNG" title = "directory structure"/>

<br>

<h2>Steps to run at your system:</h2>
	<ul>
	<li>Clone the repository using "git clone <repository url>"</li>
	<li>Change "Username" and "Password" in both scenarios in feature file</li>
	<li>Run "mvn clean test"</li>
	<li>Run "mvn site"</li>
	</ul>
	
<h2>Cucumber Reports: net.masterthought - This will generate two reports</h2>
	<ul>
	<li>Cucumber Pretty (folder - "target\cucumber-reports\cucumber-pretty"), file - "index.html"</li>
	<li>Cucumber Advance (folder - "target\cucumber-reports\advanced-reports\cucumber-html-reports"), file - "overview-features.html"	</li>
	</ul>
	<br>
<h2>Folders for these reports:</h2>
<br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/cucumber-pretty-advanced.PNG" title = "cucumber pretty and advanced"/>
<br>

<h2>Snapshots - Cucumber - Pretty - Report: See here </h2>
<br>
<ul>
<li><a href = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/cucumber-pretty1.PNG" title = "cucumber pretty and advanced">Cucumber-pretty summarized</a></li>
<li><a href = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/cucucmber-pretty.pdf" title = "cucumber pretty and advanced">Cucumber-pretty expanded</a></li>
</ul>

<h2>Snapshots - Cucumber - Advanced - Report: See here </h2>
<br>
<ul>
<li><a href = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/cucumber-advanced2.PNG" title = "cucumber pretty and advanced">Cucumber-advance summarized</a></li>
<li><a href = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/cucumber-advance.pdf" title = "cucumber pretty and advanced">Cucumber-advance expanded</a></li>
</ul>

<br>
	
<h2>See configuration in "pom.xml" file</h2>

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
				<projectName>MyProjectName</projectName>
				<!-- Replace with project name -->
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

				
				
				
<h2>Allure Report:</h2> Allure reports will be generated based on the testcases json files when you'll run "mvn site". 
<h3>Add this Allure dependency in pom.xml:</h3>

	<dependency>
		<groupId>ru.yandex.qatools.allure</groupId>
		<artifactId>allure-cucumber-jvm-adaptor</artifactId>
		<version>1.6.2</version>
	</dependency>

	
<h3>Add this under Maven Surefire plugin:</h3>

	<argLine>
		javaagent:"${settings.localRepository}/org/aspectj/aspectjweaver/${aspectj.version}/aspectjweaver-${aspectj.version}.jar"                     -Dcucumber.options="--plugin ru.yandex.qatools.allure.cucumberjvm.AllureReporter"
	</argLine

	
<h3>And this under "project xml" tag</h3>	

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
	
<br><br>
<h3>You will be able to locate the report in folder : "target\site\allure-maven-plugin", the "Index.html" file. </h3>

<br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/allure-report.PNG" title = "allure report folder"/>
<br><br><br>
<h3>You can either open it through Firefox or on a local server. I had used "Jetty server", using this command: "mvn jetty:run". And then open url in your any browser "http://localhost:8080" and there you go.</h3>

<b>MVN Jetty configuration is to be done in pom.xml if want to use it:</b>

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

<h2>Example snapshot of Allure report: </h2>

<ul><b>
<li>allure-xunit view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/allure-xunit.PNG" title = "allure-xunit view"/></li><br><br>
<li>allure-xunit1 view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/allure-xunit1.PNG" title = "allure-xunit1 view"/></li><br><br>
<li>allure-xunit2 view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/allure-xunit2.PNG" title = "allure-xunit2 view"/></li><br><br>
<li>allure-behavior1 view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/behavior1.PNG" title = "allure-behavior1 view"/></li><br><br>
<li>allure-behavior2 view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/behavior2.PNG" title = "allure-behavior2 view"/></li><br><br>
<li>allure-graph view<br><br>
<img src = "https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/images/allure-graph.png" title = "allure-graph view"/></li><br><br>
</b></ul>

<h3>Added a sample Execution Video and Generated Reports, See here: 
<a width="400px" height="200px" href="https://github.com/rohinegi548/Cucumber-BDD-Automation-Framework/blob/master/Execution%20Demo.mp4">Herexecution Video and Generated Reports</a></h3>

